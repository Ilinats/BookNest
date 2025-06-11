/*
  Warnings:

  - A unique constraint covering the columns `[libraryId,bookId]` on the table `LibraryEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LibraryEntry_libraryId_bookId_key" ON "LibraryEntry"("libraryId", "bookId");
