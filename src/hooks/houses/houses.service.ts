'use client'

import { fetcher } from "@/config/fetcher";
import {  HousesTypes, PaginationProps } from "./types";

export const getHouses = async ({ page, pageSize }: PaginationProps)=> fetcher<HousesTypes[]>(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`)
