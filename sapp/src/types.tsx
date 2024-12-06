export type ScheduleItem = {
    name: string;
    shift: string;
};

export type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export type Schedule = {
    [key in Days]: ScheduleItem[];
};