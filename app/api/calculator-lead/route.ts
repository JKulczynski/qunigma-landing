import { NextResponse } from 'next/server';

// Columns in the shared Google Sheet CRM (client-provided, already set up):
// Timestamp, Full Name, Work Email, Company / Bank, Role / Title, Annual Revenue (EUR),
// Calculated Exposure (EUR), Country, Current Security Stack, Phone, Biggest DORA Concern,
// Lead Status, Notes

interface CalculatorLeadPayload {
  fullName: string;
  workEmail: string;
  company: string;
  role?: string;
  phone?: string;
  annualRevenueEur: number;
  calculatedExposureEur: number;
  country: string;
  sector?: string;
  aiActInScope?: boolean;
  currentSecurityStack?: string[];
  biggestDoraConcern?: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isValidEmail(value: string): boolean {
  // Intentionally simple: good enough to catch obvious mistakes, not a full RFC validator.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Partial<CalculatorLeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy JSON w treści żądania.' }, { status: 400 });
  }

  const errors: string[] = [];

  if (!isNonEmptyString(body.fullName)) errors.push('Brak imienia i nazwiska (fullName).');
  if (!isNonEmptyString(body.workEmail) || !isValidEmail(body.workEmail)) errors.push('Brak poprawnego adresu email służbowego (workEmail).');
  if (!isNonEmptyString(body.company)) errors.push('Brak nazwy firmy / banku (company).');
  if (!isFiniteNumber(body.annualRevenueEur) || body.annualRevenueEur <= 0) errors.push('Brak poprawnego rocznego przychodu w EUR (annualRevenueEur).');
  if (!isFiniteNumber(body.calculatedExposureEur) || body.calculatedExposureEur < 0) errors.push('Brak poprawnej wyliczonej ekspozycji (calculatedExposureEur).');

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: 'Walidacja nie powiodła się.', details: errors }, { status: 400 });
  }

  const record = {
    timestamp: new Date().toISOString(),
    fullName: body.fullName as string,
    workEmail: body.workEmail as string,
    company: body.company as string,
    role: body.role ?? '',
    annualRevenueEur: body.annualRevenueEur as number,
    calculatedExposureEur: body.calculatedExposureEur as number,
    country: body.country ?? '',
    currentSecurityStack: Array.isArray(body.currentSecurityStack) ? body.currentSecurityStack.join(', ') : '',
    phone: body.phone ?? '',
    biggestDoraConcern: body.biggestDoraConcern ?? '',
    leadStatus: 'New',
    notes: body.sector ? `Sektor: ${body.sector}${body.aiActInScope ? ' | Systemy AI Act w zakresie' : ''}` : '',
  };

  // TODO: write to Google Sheets CRM once service account credentials are configured.
  // This is the exact point where the row above (`record`) should be appended to the
  // shared "CRM" Google Sheet via the Sheets API (columns: Timestamp, Full Name, Work Email,
  // Company / Bank, Role / Title, Annual Revenue (EUR), Calculated Exposure (EUR), Country,
  // Current Security Stack, Phone, Biggest DORA Concern, Lead Status, Notes). Requires a
  // Google service-account key configured as a Vercel/Cloudflare environment variable; no
  // such credential exists yet, so for now this handler only validates and acknowledges.

  return NextResponse.json({ ok: true });
}
