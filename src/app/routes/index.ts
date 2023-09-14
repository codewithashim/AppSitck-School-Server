import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { HeaderRoutes } from "../modules/header/header.route";
import { ResultRoutes } from "../modules/result/result.route";
import { NoticeRoutes } from "../modules/notice/notice.route";
import { ContactRoutes } from "../modules/contact/contact.router";
import { AboutRoutes } from "../modules/about/about.route";
import { EventRoutes } from "../modules/event/event.route";
import { TeacherRoutes } from "../modules/teacher/teacher.route";
import { LogoRoutes } from "../modules/logo/logo.route";
import { StaffRoutes } from "../modules/staff/staff.route";
import { CommitteeRoutes } from "../modules/committee/committee.route";
import { HomeSliderRoutes } from "../modules/homeslider/homeslider.route";
import { PhotoGelaryRoutes } from "../modules/photoGelary/photoGelary.route";
import { StatisticRoutes } from "../modules/statistic/statistic.route";
import { RutineRoutes } from "../modules/rutine/rutine.route";
import { SylebusRoutes } from "../modules/sylebus/sylebus.route";
import { StudentPortalRoutes } from "../modules/studentPortal/studentPortal.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/header",
    route: HeaderRoutes,
  },
  {
    path: "/result",
    route: ResultRoutes,
  },
  {
    path: "/notice",
    route: NoticeRoutes,
  },
  {
    path: "/contact",
    route: ContactRoutes,
  },
  {
    path: "/about",
    route: AboutRoutes,
  },
  {
    path: "/event",
    route: EventRoutes,
  },
  {
    path: "/teacher",
    route: TeacherRoutes,
  },
  {
    path: "/homeslider",
    route: HomeSliderRoutes,
  },
  {
    path: "/logo",
    route: LogoRoutes,
  },
  {
    path: "/photogelary",
    route: PhotoGelaryRoutes,
  },
  {
    path: "/staff",
    route: StaffRoutes,
  },
  {
    path: "/committee",
    route: CommitteeRoutes,
  },
  {
    path: "/statistic",
    route: StatisticRoutes,
  },
  {
    path: "rutine",
    route: RutineRoutes,
  },
  {
    path: "sylebus",
    route: SylebusRoutes,
  },
  {
    path: "student-portal",
    route: StudentPortalRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
