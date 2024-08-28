"use client";

export const fetchHouses = async ({ pageParam } : { pageParam: number}) : Promise<any> => {
    const res = await fetch(`https://www.anapioficeandfire.com/api/houses?page=${pageParam}&pageSize=${10}`)
    return res.json()
  }