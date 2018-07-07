export class Dependency {
  id: number;
  project: string;
  team: string;
  sprintNumber: number;
  ticketNumber: number;
  startDate: string;
  endDate: string;
  notes: string;
  description: string;
  duration: number;


  constructor( project: string, team: string, notes: string, description: string, startDate: string, endDate: string, duration: number, sprintNumber: number, ticketNumber: number) {
    this.team = team;
    this.notes = notes;
    this.project = project;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.duration = duration;
    this.sprintNumber = sprintNumber;
    this.ticketNumber = ticketNumber;
  }
}

