"use client";
import { Song } from "@/src/data/schema";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataColumnHeader";

const columnHelper = createColumnHelper<Song>()

export const columns = [
  columnHelper.accessor("day", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Day" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-right",
      displayName: "Day",
    }
  }),
  columnHelper.accessor("song", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Song" />
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: true,
    meta: {
      className: "text-left",
      displayName: "Song",
    },
  }),
  columnHelper.accessor("artist", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artist" />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Artist",
    },
  }),

  columnHelper.accessor("correctGuesses", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wins" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-right",
      displayName: "Wins",
    }}),
    columnHelper.accessor("totalGuesses", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tries" />
      ),
      enableSorting: true,
      enableHiding: false,
      meta: {
        className: "text-right",
        displayName: "Tries",
      }}),
    columnHelper.accessor("hot100Peak", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Peak" />
      ),
      enableSorting: true,
      enableHiding: false,
      meta: {
        className: "text-right",
        displayName: "Peak",
      }}),
  columnHelper.accessor("releaseYear", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-right",
      displayName: "Year",
    }}),
    // columnHelper.accessor("releaseDecade", {
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Decade" />
    //   ),
    //   enableSorting: true,
    //   enableHiding: false,
    //   meta: {
    //     className: "text-left",
    //     displayName: "Decade",
    //   }}),
  // columnHelper.accessor("broadGenre", {
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Genre" />
  //   ),
  //   enableSorting: false,
  //   enableHiding: true,
  //   meta: {
  //     className: "text-left",
  //     displayName: "Genre",
  //   },
  // }),
  columnHelper.accessor("genre", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subgenre" />
    ),
    enableSorting: false,
    enableHiding: true,
    meta: {
      className: "text-left",
      displayName: "Subgenre",
    },
  }),
  columnHelper.accessor("drummer", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Drummer" />
    ),
    enableSorting: false,
    enableHiding: true,
    meta: {
      className: "text-left whitespace-nowrap",
      displayName: "Drummer",
    },
  }),
] as ColumnDef<Song>[]
