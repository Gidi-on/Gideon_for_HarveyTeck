import { BiHelpCircle } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { HiAdjustments } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

export const links = [
  { title: "Categories", id: 1 },
  { title: "Deals", id: 2 },
  { title: "What's New", id: 3 },
  { title: "Delivery", id: 4 },
];

export const affiliate = [
  {
    title: "Become Seller",
    icon: <BsBriefcase className="text-[#cb5e94] text-2xl" />,
  },
  { title: "Gift Cards", icon: <FiGift className="text-[#cb5e94] text-2xl" /> },
  {
    title: "Help Center",
    icon: <BiHelpCircle className="text-[#cb5e94] text-2xl" />,
  },
];

export const sort = [
  {
    title: "headphone type",
    icon: <RiArrowDropDownLine className="text-2xl" />,
  },
  { title: "price", icon: <RiArrowDropDownLine className="text-2xl" /> },
  {
    title: "review",
    icon: <RiArrowDropDownLine className="text-2xl" />,
  },
  { title: "color", icon: <RiArrowDropDownLine className="text-2xl" /> },
  { title: "material", icon: <RiArrowDropDownLine className="text-2xl" /> },
  { title: "offer", icon: <RiArrowDropDownLine className="text-2xl" /> },
  { title: "all filters", icon: <HiAdjustments className="pl-1" /> },
];
