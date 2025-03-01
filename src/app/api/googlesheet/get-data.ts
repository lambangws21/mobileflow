import { getSheetsClient } from '@/lib/googleSheets';

const SPREADSHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';

export async function GET() {
  try {
    const sheets = await getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1',
    });
    return new Response(JSON.stringify(response.data.values ?? []), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Server Error - Periksa izin akses Google Sheet', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
