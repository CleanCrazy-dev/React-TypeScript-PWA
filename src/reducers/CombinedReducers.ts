import { combineReducers } from "redux";
import { UtilityReducer } from "./UtilityReducer";
import { userReducer } from "../data/users";
import { combineForms } from "react-redux-form";

const rxFormReducer = combineForms({
  userForm: {
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    middleName: "",
    company: "",
    whatsAppNumber: "",
    leadType: "",
    leadSource: "",
    leadStatus: "",
    subLeadSource: "",
    rating: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    street: ""
  },
  leadForm: {
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    middleName: "",
    company: "",
    whatsAppNumber: "",
    leadType: "",
    leadSource: "",
    leadStatus: "",
    subLeadSource: "",
    rating: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    street: "",
    vehicleNumber: "",
    fuelType: "",
    wheeles: "",
    vehicleMek: "",
    vehicleModel: "",
    usage: "",
    vehicleType: "",
    dailyRunning: null,
    registration: null,
    mfg: null,
    chassis: "",
    gstNumber: ""
  },
  customerForm: {},
  editUserForm: {},

});

export const reducers = combineReducers({
  utility: UtilityReducer,
  users: userReducer,
  rxFormReducer,
});
