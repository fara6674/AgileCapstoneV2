export class Hero {
  id: number;
  description: string;
  startDate: string;
  endDate: string;
  duration: number;
  sprintNumber: number;
  ticketNumber: string;

  constructor(description: string, startDate: string, endDate: string, duration: number, sprintNumber: number, ticketNumber) {
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.duration = duration;
    this.sprintNumber = sprintNumber;
    this.ticketNumber = ticketNumber;
  }
}

