"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const header_route_1 = require("../modules/header/header.route");
const result_route_1 = require("../modules/result/result.route");
const notice_route_1 = require("../modules/notice/notice.route");
const contact_router_1 = require("../modules/contact/contact.router");
const about_route_1 = require("../modules/about/about.route");
const event_route_1 = require("../modules/event/event.route");
const teacher_route_1 = require("../modules/teacher/teacher.route");
const logo_route_1 = require("../modules/logo/logo.route");
const staff_route_1 = require("../modules/staff/staff.route");
const committee_route_1 = require("../modules/committee/committee.route");
const homeslider_route_1 = require("../modules/homeslider/homeslider.route");
const photoGelary_route_1 = require("../modules/photoGelary/photoGelary.route");
const statistic_route_1 = require("../modules/statistic/statistic.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/header",
        route: header_route_1.HeaderRoutes,
    },
    {
        path: "/result",
        route: result_route_1.ResultRoutes,
    },
    {
        path: "/notice",
        route: notice_route_1.NoticeRoutes,
    },
    {
        path: "/contact",
        route: contact_router_1.ContactRoutes,
    },
    {
        path: "/about",
        route: about_route_1.AboutRoutes,
    },
    {
        path: "/event",
        route: event_route_1.EventRoutes,
    },
    {
        path: "/teacher",
        route: teacher_route_1.TeacherRoutes,
    },
    {
        path: "/homeslider",
        route: homeslider_route_1.HomeSliderRoutes,
    },
    {
        path: "/logo",
        route: logo_route_1.LogoRoutes,
    },
    {
        path: "/photogelary",
        route: photoGelary_route_1.PhotoGelaryRoutes,
    },
    {
        path: "/staff",
        route: staff_route_1.StaffRoutes,
    },
    {
        path: "/committee",
        route: committee_route_1.CommitteeRoutes,
    },
    {
        path: "/statistic",
        route: statistic_route_1.StatisticRoutes,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
