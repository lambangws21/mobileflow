// import { NextResponse } from 'next/server';
// import { google } from 'googleapis';

// type SheetValue = string | number;
// interface SheetData {
//   data: SheetValue[][];
// }

// // Hardcoded credentials untuk testing
// const SHEET_ID: string = "1XL2lPayx_53HNTtfaZ7YHXgefk5gmpeYiJHxnLk4FJg";
// const CLIENT_EMAIL: string = "nextdata@nextjs-dataoperasi.iam.gserviceaccount.com";
// const PRIVATE_KEY: string = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDVQSMEU2itxiUo\nLEIROQS0yusXnS89irq+o3wOUEajw9Dd14sgPZNXko/r1d4hlUrqyaB6E25Jxl2N\niiDfsLRphes1Shy1amKfj2XCJ4pLH8iEhELA/QkwhBqYf3VVIU3WLE4Opu4fHaXK\nlR8MsYJ4dV6izle/Lk/O6E0qvHwpM1P+/6P//YkvRqPAyVrTdNQ/M8R6/MkP2HQD\n3O9QaiETI8CCUZeF128Jx0s/bkw2+XRDjGsi5rCV/oZJLbwfqyW962cUMMP0wXsm\nHX69o6dkiPKKBBF/zOzz/NWo9u/2AZ15I4G7+BwHgnkZdiu8uQSGPF0XFxnt8HZ+\n+1vArKrvAgMBAAECggEAVBp0y3NzwLj5FX9i7PTuSLkQf4cjxuMsJBxIxEJfoZ2M\nBbnIqkXukqaAMTPu/5Kn8bHkItD/+YOMiNI1hdLkTAufSCx65wdWbvQ4XxqF/XvC\n8pRQ2VjR43ruHD+EUDcqwfFGNZwbJFVmed9W2AQ33vb3BEFZtNH4crMGH/knBH37\ntVxUrvEM51X110ulgLtSepZ0aX8KKKT1G3lw6aQyL1V5FFRcv1GI+lLQxXgYJTRy\nd4p7VcyNuPsWbEsZgCAcEqWw0QxSygf3T8V+dX7D/025yLWGcrrm/VKaRhR2T1sF\nDv6jrYPgkNzYoZPhBxVvJn8SVhey8Rt/qgVdG/7EzQKBgQD1xUfvNks/aZbQ5Ycf\nSs1GI9+UVIgkwceadCXZDCosthfW7Ac9pa9Jb/ptehihYXApETC/iRcmh7VbYsCD\n5RP8jF/8fYe7ZT1uN9r/bCm7n20V6FhSLvObj4wN/E5jjN2Mk7YPvr1uruWOZ/Wz\nWWvOJh8Qv4Kcqqrwh/aIb2sY6wKBgQDeIWQ1saVLehiVSq5UJyj3hw6lzsuReXOv\nht1rRG6WVqlT3Fn1w0WqKSly6XQE2CzK7o+4aiVRb4bBaXrBoOyL+EiH38eiqckK\n8opc8HznAAyQMrnf7eIhgZWBYSXq26y8YoLY84Mg8hYH1+v6oRJ8TEDjH6Su22/e\nK58/S0t1DQKBgA1iVf2H9mcYp/buWQJyP2WPdJCOXe+qgeU+aAU+7VkL/ZZdujM4\nP6h/KaMmoArB1KrX3dDAdXtKrqywXw2PvxvkxSFp8Kda5xKGhi2cxVULZJRp1815\n8xhIo/brA5XWSQZr0OFgoM5TRfsQXEgNGZrbZpux4joH7VE2Bk39y1ZLAoGAHxBS\nYEPolsaLW41nFbOoQf1sKfnidASlDf3xRwf54yJZabXeCsV1H5fECSLmq6rDkNmN\n1b9aWqobET88AIoNqoFdO0srMu9Fgzdp7BdhkDhsiVnerpco0YC6tK4uTErOPEYW\ngFqFkvzn4c7rXFBcMm/Dfz+0mxNq8InvKj3QXp0CgYBvoirJChDxDGuOTY9E5fu1\nxguI7KkSaBQP+4A9wTKUdmXTRs+0Xn6WdgvM7BmS5YsM43FV4dpUWlzptYbdkQnk\n-----END PRIVATE KEY-----\n";

// console.log({
//   SHEET_ID,
//   CLIENT_EMAIL,
//   PRIVATE_KEY: PRIVATE_KEY.substring(0, 20) + '...',
// });

// export async function GET(_request: Request) {
//   try {
//     const auth = new google.auth.JWT(
//       CLIENT_EMAIL,
//       undefined,
//       PRIVATE_KEY,
//       ['https://www.googleapis.com/auth/spreadsheets']
//     );

//     const sheets = google.sheets({ version: 'v4', auth });
//     const range = 'Sheet1!A1:E';

//     const result = await sheets.spreadsheets.values.get({
//       spreadsheetId: SHEET_ID,
//       range,
//     });

//     const data: (string | number)[][] = (result.data.values as (string | number)[][]) || [];
//     const sheetData: SheetData = { data };

//     return NextResponse.json(sheetData);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error('Error connecting to Google Sheet:', error.message);
//     } else {
//       console.error('Unexpected error:', error);
//     }
//     return NextResponse.json({ error: 'Gagal mengakses Google Sheet' }, { status: 500 });
//   }
// }
