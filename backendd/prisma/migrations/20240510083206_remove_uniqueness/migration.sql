-- DropIndex
DROP INDEX "Booking_Carid_key";

-- DropIndex
DROP INDEX "Booking_TourGuideid_key";

-- DropIndex
DROP INDEX "Booking_hotelid_key";

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "image_url" DROP NOT NULL;
