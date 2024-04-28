-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "daily_price" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "star_rating" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "nightly_price" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourGuide" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "specialties" TEXT NOT NULL,
    "daily_rate" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "availability" BOOLEAN NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "TourGuide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Site" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "Carid" INTEGER NOT NULL,
    "hotelid" INTEGER NOT NULL,
    "TourGuideid" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "num_rooms" INTEGER NOT NULL,
    "adults" INTEGER NOT NULL,
    "children" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL DEFAULT 0.00,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_Carid_key" ON "Booking"("Carid");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_hotelid_key" ON "Booking"("hotelid");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_TourGuideid_key" ON "Booking"("TourGuideid");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_Carid_fkey" FOREIGN KEY ("Carid") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_TourGuideid_fkey" FOREIGN KEY ("TourGuideid") REFERENCES "TourGuide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
