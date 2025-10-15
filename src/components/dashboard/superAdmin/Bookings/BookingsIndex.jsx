"use client";
import React from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { Calendar } from "@/components/ui/calendar";
import { allBookings } from "@/lib/dummyData/allBookingsData";
import { format, parseISO, isSameMonth, addMonths, subMonths } from "date-fns";
import { ChevronRightIcon } from "@/components/shared/Icons/ChevronRightIcon";
import { SearchIcon } from "@/components/shared/Icons/SearchIcon";
import { TickedSquareIcon } from "@/components/shared/Icons/TickedSquareIcon";
import { TickGoodSquareIcon } from "@/components/shared/Icons/TickGoodSquareIcon";
import { BookingsItems } from "./BookingsItems";

const filters = [
  { label: "View All", color: "bg-purple-600" },
  { label: "Personal", color: "bg-blue-500" },
  { label: "Agent", color: "bg-red-500" },
  { label: "House Tour", color: "bg-green-500" },
  { label: "Land Tour", color: "bg-yellow-500" },
  { label: "Inspection", color: "bg-gray-500" },
];

export const BookingsIndex = () => {
  const [date, setDate] = React.useState(new Date());

  const selectedMonth = date ? format(date, "MMMM") : "";
  const selectedYear = date ? format(date, "yyyy") : "";

  // Convert selected date to ISO for matching
  const selectedDateString = date?.toISOString().split("T")[0];

  // Bookings that match selected date
  const bookingsForDate = allBookings.filter(
    (b) => b.date === selectedDateString
  );

  // Bookings that match selected month
  const bookingsForMonth = allBookings.filter((b) =>
    isSameMonth(parseISO(b.date), date)
  );

  // Determine what to show
  const showByDate = bookingsForDate.length > 0;
  const showByMonth = !showByDate && bookingsForMonth.length > 0;

  return (
    <AppWrapper>
      <SuperAdminHeader />
      <div className="px-4">
        <div className="p-4">
          <p className="md:text-4xl font-semibold text-textColor font-urbanist">
            Bookings
          </p>
          <p className="text-textColor text-sm font-normal font-urbanist">
            A quick glance at all properties
          </p>
        </div>

        <div className="bg-white">
          <div className="py-5 border-b flex gap-5">
            <div className="max-w-80 mx-4">
              <button className="text-white text-base bg-primaryColor py-2 px-10 w-3xs rounded-sm">
                Add Booking
              </button>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex items-center gap-10">
                <div className="flex gap-5">
                  {/* Previous Month */}
                  <button
                    onClick={() => setDate((prev) => subMonths(prev, 1))}
                    className="rotate-180 cursor-pointer"
                  >
                    <ChevronRightIcon width="18" height="18" />
                  </button>

                  {/* Next Month */}
                  <button
                    className="cursor-pointer"
                    onClick={() => setDate((prev) => addMonths(prev, 1))}
                  >
                    <ChevronRightIcon width="18" height="18" />
                  </button>
                </div>

                <p className="text-lg font-semibold text-textColor font-urbanist">
                  {selectedMonth} {selectedYear}
                </p>
              </div>

              <div className="w-64 flex gap-2 justify-center items-center border border-[#C6D0D2] rounded-2xl h-10 p-2">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border-none outline-none text-[#22303E66] text-sm focus:outline-none focus:text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Calendar + Bookings */}
          <div className="md:flex gap-6">
            <div className="max-w-80">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border-b w-2xs"
              />

              <div className="my-5 px-4">
                <p className="text-textColor text-xl font-semibold font-urbanist">
                  Booking Filters
                </p>
                
                 {filters.map(item => (
                  <div className="flex gap-5 my-3">
                     <TickedSquareIcon />
                    <p>{item.label}</p>
                  </div>
                 ))}
                  
              </div>
            </div>

            {/* Right side — Bookings */}
            <div className="w-full">
              {showByDate ? (
                bookingsForDate.map((bookingDay, index) => (
                  <BookingsItems
                    key={index}
                    date={format(parseISO(bookingDay.date), "MMMM dd, yyyy")}
                    day={bookingDay.day}
                    items={bookingDay.items}
                  />
                ))
              ) : showByMonth ? (
                bookingsForMonth.map((bookingDay, index) => (
                  <BookingsItems
                    key={index}
                    date={format(parseISO(bookingDay.date), "MMMM dd, yyyy")}
                    day={bookingDay.day}
                    items={bookingDay.items}
                  />
                ))
              ) : (
                <div className="text-sm text-textColor flex justify-center items-center">
                  No bookings found for {selectedMonth} {selectedYear}.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};
