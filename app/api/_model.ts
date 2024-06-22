import { NextRequest, NextResponse } from "next/server";

export interface ResponeGetBody<T> {
  total: number;
  per_page: number;
  page: number;
  data: T[];
}

export interface GetGlobalParams {
  page: string | undefined;
  per_page: string | undefined;
}

export type Handler<T, U = undefined> = (
  request: NextRequest,
  context: { params: U } | undefined,
) => Promise<NextResponse<T>>;
