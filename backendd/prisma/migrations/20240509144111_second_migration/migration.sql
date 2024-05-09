/*
  Warnings:

  - You are about to drop the column `city` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `daily_rate` on the `TourGuide` table. All the data in the column will be lost.
  - Added the required column `siteid` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `daily_price` to the `TourGuide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "city",
DROP COLUMN "country",
ADD COLUMN     "siteid" INTEGER NOT NULL,
ALTER COLUMN "destination" DROP NOT NULL,
ALTER COLUMN "total_price" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "daily_price" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "nightly_price" DROP DEFAULT;

-- AlterTable
ALTER TABLE "TourGuide" DROP COLUMN "daily_rate",
ADD COLUMN     "daily_price" DECIMAL(65,30) NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_siteid_fkey" FOREIGN KEY ("siteid") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
