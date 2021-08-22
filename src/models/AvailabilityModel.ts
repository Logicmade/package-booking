export class AvailabilityModel {
  restaurantId: string;
  bookingMainID: string;
  availabilityName: string;
  description: string;
  validFrom!: Date;
  validUntil!: Date;
  bookingStartDate!: Date;
  bookingEndDate!: Date;
  startTime!: Date;
  endTime!: Date;
  isMaster: boolean;
  maxCapacity: number;
  status: number; // 0 : passive, 1 :active
  stopBookingCapacity: number;
  maxPaxToAutoConfirm: number;
  bookingInterval: number; // 15-> 9:00, 9:15, 9:30 ...
  maxTableOccupationMinutePerPax: number;

}