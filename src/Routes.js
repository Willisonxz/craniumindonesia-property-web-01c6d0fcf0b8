
// auth
const ROUTES_SIGNUP = '/signup'
const ROUTES_LOGIN = '/login'

// HOME
const ROUTES_BUY = '/buy'
const ROUTES_RENT = '/rent'
const ROUTES_SOLD = '/sold'

// New Home and Sub Menu
const ROUTES_NEW_HOMES = '/new-homes'
const ROUTES_NEW_APARTMENTS = '/new-apartments'
const ROUTES_NEW_LAND = '/new-land'
const ROUTES_NEW_HOME_AND_LAND = '/new-home-and-land'
const ROUTES_NEW_BUILDER = '/new-builder'
const ROUTES_NEW_HOME_DESIGN = '/new-home-design'

const ROUTES_NEW_APARTMENTS_ID_APARTMENT = '/new-apartments/:id_apartment'
const ROUTES_NEW_LAND_ID_LAND = '/new-land/:id_land'
const ROUTES_NEW_HOME_AND_LAND_ID_HOME_AND_LAND = "/new-home-and-land/:id_project"
const ROUTES_NEW_BUILDER_ID_BUILDER = '/new-builder/:id_builder'
const ROUTES_NEW_HOME_DESIGN_ID_HOME_DESIGN = '/new-home-design/:id_home_design'

const ROUTES_PROJECT_NEW_APARTMENTS_ID_APARTMENT = '/project/new-apartments/:id_project'
const ROUTES_PROJECT_NEW_LANDS_ID_LAND = '/project/new-land/:id_project'
const ROUTES_PROJECT_NEW_HOME_AND_LAND_ID_HOME_AND_LAND = '/project/new-home-and-land/:id_project'
const ROUTES_PROJECT_NEW_BUILDER_ID_BUILDER = '/project/new-builder/:id_project'
const ROUTES_PROJECT_NEW_HOME_DESIGN_ID_HOME_DESIGN = '/project/new-home-design/:id_project'

// NEWS
const ROUTES_NEWS = '/news'
const ROUTES_NEWS_INTEREST_RATES = '/news/interest-rate'
const ROUTES_NEWS_PROPERTY_MARKET = '/news/property-market'
const ROUTES_NEWS_BUYING_BUILDING = '/news/buying-building'
const ROUTES_NEWS_SUSTAINABLE_HOME = '/news/sustainable-home'
const ROUTES_NEWS_NSW = '/news/nsw'
const ROUTES_NEWS_VIC = '/news/vic'
const ROUTES_NEWS_QLD = '/news/qld'
const ROUTES_NEWS_SA = '/news/sa'
const ROUTES_NEWS_TAS = '/news/tas'
const ROUTES_NEWS_NT = '/news/nt'
const ROUTES_NEWS_ACT = '/news/act'
const ROUTES_NEWS_WA = '/news/wa'


const ROUTES_INSIGHTS = '/insights'

const ROUTES_GUIDES = '/guides'
const ROUTES_GUIDES_BUYING = '/guides/buying'
const ROUTES_GUIDES_SELLING = '/guides/selling'
const ROUTES_GUIDES_INVESTING = '/guides/investing'
const ROUTES_GUIDES_RENTING = '/guides/renting'
const ROUTES_GUIDES_BUILDING = '/guides/building'
const ROUTES_GUIDES_FINANCE = '/guides/finance'
const ROUTES_GUIDES_INSURANCE = '/guides/insurance'
const ROUTES_GUIDES_MOVING = '/guides/moving'
const ROUTES_GUIDES_SUSTAINBILITY = '/guides/sustainbility'
const ROUTES_GUIDES_SAFE_SECURITY = '/guides/safe-security'

const ROUTES_LIFESTYLE = '/lifestyle'
const ROUTES_LIFESTYLE_INDOOR_STYLE = '/lifestyle/indoor-style'
const ROUTES_LIFESTYLE_OUTDOOR_LIVING = '/lifestyle/outdoor-living'
const ROUTES_LIFESTYLE_RENOVATING = '/lifestyle/renovating'
const ROUTES_LIFESTYLE_DREAM_HOUSE = '/lifestyle/dream-house'
const ROUTES_LIFESTYLE_ORGANISING_CLEANING = '/lifestyle/organising-cleaning'
const ROUTES_LIFESTYLE_TRAVEL = '/lifestyle/travel'

const ROUTES_VIDEO = '/video'

const ROUTES_BUY_LIST = '/buy/list'
const ROUTES_BUY_ID = '/buy/:id'
const ROUTES_BUY_MAP = '/buy/map'
const ROUTES_BUY_INSPECTIONS = '/buy/inspections'
const ROUTES_BUY_SAVE_SEARCH = '/buy/save-search'

// agent and agencies
const ROUTES_FIND_AGENT = '/find-agent'
const ROUTES_FIND_AGENT_DETAIL = '/find-agent/detail'
const ROUTES_FIND_APPRAISAL = '/find-agent-appraisal'
const ROUTES_FIND_APPRAISAL_DETAIL = '/find-agent-appraisal/detail'
const ROUTES_AGENCY = '/agency'
const ROUTES_AGENCY_ID = '/agency/:id'
const ROUTES_AGENT = '/agent'
const ROUTES_AGENT_ID = '/agent/:id'

// Collections
const ROUTES_COLLECTIONS_SAVED_PROPERTIES = '/collections/saved-properties'
const ROUTES_COLLECTIONS_PLANNED_INSPECTIONS = '/collections/planner'
// const ROUTES_COLLECTIONS_INSPECTION_PLAN_INDEX = '/collections/planner'
const ROUTES_COLLECTIONS_INSPECTION_PLAN_ALL = '/collections/inspections'
const ROUTES_COLLECTIONS_ENQUIRED_PROPERTIES = '/collections/enquired'
const ROUTES_COLLECTIONS_HIDDEN_PROPERTIES = '/collections/hidden'
const ROUTES_COLLECTIONS_ITEMS = '/collections/:id_collection'

// Profile
const ROUTES_PROFILE = '/me'
const ROUTES_PROFILE_ACCOUNT_SETTINGS = '/my-real-estate/account'
const ROUTES_PROFILE_MY_PROFILE = '/profile'
const ROUTES_PROFILE_MY_RENTAL_LISTINGS = '/advertise-property-for-rent/manage-listings'
const ROUTES_PROFILE_RENTER_PROFILE = '/rent/renter-profile'
const ROUTES_PROFILE_RENTAL_APPLICATION = '/rent/applications'
const ROUTES_PROFILE_SAVED_SEARCHES = '/saved-searches'
const ROUTES_PROFILE_TRACK_YOUR_PROPERTY = '/property'
const ROUTES_PROFILE_TRACK_YOUR_PROPERTY_DETAILS = '/property/my-property/details'
const ROUTES_PROFILE_MY_PROPERTIES = '/property/my-property'
const ROUTES_PROFILE_UPDATE_EMAIL = '/email/update'
const ROUTES_PROFILE_UPDATE_PASSWORD = '/password/update'

// Renter Profile Sub Menu
const ROUTES_RENTER_PROFILE_ABOUT_ME = '/rent/renter-profile/about-me'
const ROUTES_RENTER_PROFILE_ADDRESS_HISTORY = '/rent/renter-profile/address-history'
const ROUTES_RENTER_PROFILE_EMERGENCY_CONTACT = '/rent/renter-profile/emergency-contact'
const ROUTES_RENTER_PROFILE_EMPLOYMENT = '/rent/renter-profile/employment'
const ROUTES_RENTER_PROFILE_IDENTITY_DOCUMENTS = '/rent/renter-profile/identity-documents'
const ROUTES_RENTER_PROFILE_INCOME = '/rent/renter-profile/income'
const ROUTES_RENTER_PROFILE_PEOPLE = '/rent/renter-profile/people'
const ROUTES_RENTER_PROFILE_PERSONAL_DETAILS = '/rent/renter-profile/personal-details'
const ROUTES_RENTER_PROFILE_PETS = '/rent/renter-profile/pets'
const ROUTES_RENTER_PROFILE_TENANT_CHECK = '/rent/renter-profile/tenant-check'
const ROUTES_RENTER_PROFILE_UTILITY_CONNECTION_SERVICE = '/rent/renter-profile/utility-connection-service'

const ROUTES_ADVERTISE_APPLICATION = '/advertise'

export default class RoutesPage {
    // auth
    static get RouteSignUp() {
        return ROUTES_SIGNUP;
    }
    static get RouteLogin() {
        return ROUTES_LOGIN;
    }
    // HOME
    static get RouteBuy() {
        return ROUTES_BUY;
    }
    static get RouteRent() {
        return ROUTES_RENT;
    }
    static get RoutesSold() {
        return ROUTES_SOLD;
    }
    // buy
    static get RoutesBuyList() {
        return ROUTES_BUY_LIST;
    }
    static get RoutesBuyID() {
        return ROUTES_BUY_ID;
    }
    
    static get RoutesBuyMap() {
        return ROUTES_BUY_MAP;
    }
    static get RoutesSaveSearch() {
        return ROUTES_BUY_SAVE_SEARCH;
    }
    static get RoutesBuyInspections() {
        return ROUTES_BUY_INSPECTIONS;
    }
    // end buy
    // agent and agencies
    static get RouteFindAgent() {
        return ROUTES_FIND_AGENT;
    }
    static get RouteFindAgentDetail() {
        return ROUTES_FIND_AGENT_DETAIL;
    }
    static get RouteFindAgentAppraisal() {
        return ROUTES_FIND_APPRAISAL;
    }
    
    static get RouteFindAgentAppraisalDetail() {
        return ROUTES_FIND_APPRAISAL_DETAIL;
    }
    
    static get RouteAgency() {
        return ROUTES_AGENCY;
    }
    static get RouteAgencyID() {
        return ROUTES_AGENCY_ID;
    }
    static get RouteAgent() {
        return ROUTES_AGENT;
    }
    static get RouteAgentID() {
        return ROUTES_AGENT_ID;
    }
    static get RouteNewHome() {
        return ROUTES_NEW_HOMES;
    }
    // news
    static get RouteNews() {
        return ROUTES_NEWS;
    }
    static get RouteNewsIntrestRates() {
        return ROUTES_NEWS_INTEREST_RATES;
    }
    static get RouteNewsPropertyMarket() {
        return ROUTES_NEWS_PROPERTY_MARKET;
    }
    static get RouteNewsBuyingBuilding() {
        return ROUTES_NEWS_BUYING_BUILDING;
    }
    static get RouteNewsSustainableHome() {
        return ROUTES_NEWS_SUSTAINABLE_HOME;
    }
    static get RouteNewsNsw() {
        return ROUTES_NEWS_NSW;
    }
    static get RouteNewsVic() {
        return ROUTES_NEWS_VIC;
    }
    static get RouteNewsQld() {
        return ROUTES_NEWS_QLD;
    }
    static get RouteNewsSa() {
        return ROUTES_NEWS_SA;
    }
    static get RouteNewsTas() {
        return ROUTES_NEWS_TAS;
    }
    static get RouteNewsNt() {
        return ROUTES_NEWS_NT;
    }
    static get RouteNewsAct() {
        return ROUTES_NEWS_ACT;
    }
    static get RouteNewsWa() {
        return ROUTES_NEWS_WA;
    }

    static get RouteInsignts() {
        return ROUTES_INSIGHTS;
    }

    static get RouteGuides() {
        return ROUTES_GUIDES;
    }
    static get RouteGuidesBuying() {
        return ROUTES_GUIDES_BUYING;
    }
    static get RouteGuidesSelling() {
        return ROUTES_GUIDES_SELLING;
    }
    static get RouteGuidesInvesting() {
        return ROUTES_GUIDES_INVESTING;
    }
    static get RouteGuidesRenting() {
        return ROUTES_GUIDES_RENTING;
    }
    static get RouteGuidesBuilding() {
        return ROUTES_GUIDES_BUILDING;
    }
    static get RouteGuidesFinance() {
        return ROUTES_GUIDES_FINANCE;
    }
    static get RouteGuidesInsurance() {
        return ROUTES_GUIDES_INSURANCE;
    }
    static get RouteGuidesMoving() {
        return ROUTES_GUIDES_MOVING;
    }
    static get RouteGuidesSustainbility() {
        return ROUTES_GUIDES_SUSTAINBILITY;
    }
    static get RouteGuidesSafeSecurity() {
        return ROUTES_GUIDES_SAFE_SECURITY;
    }

    static get RouteLifeStyle() {
        return ROUTES_LIFESTYLE;
    }
    static get RouteLifeStyleIndoorStyle() {
        return ROUTES_LIFESTYLE_INDOOR_STYLE;
    }
    static get RouteLifeStyleOutdoorLiving() {
        return ROUTES_LIFESTYLE_OUTDOOR_LIVING;
    }
    static get RouteLifeStyleRenovating() {
        return ROUTES_LIFESTYLE_RENOVATING;
    }
    static get RouteLifeStyleDreamHouse() {
        return ROUTES_LIFESTYLE_DREAM_HOUSE;
    }
    static get RouteLifeStyleOrganisingCleaning() {
        return ROUTES_LIFESTYLE_ORGANISING_CLEANING;
    }
    static get RouteLifeStyleTravel() {
        return ROUTES_LIFESTYLE_TRAVEL;
    }

    static get RouteVideo() {
        return ROUTES_VIDEO;
    }
    // New Homes
    static get RouteNewHomes() {
        return ROUTES_NEW_HOMES;
    }
    static get RouteNewApertment() {
        return ROUTES_NEW_APARTMENTS;
    }
    static get RouteNewLand() {
        return ROUTES_NEW_LAND;
    }
    static get RouteNewHomeAndLand() {
        return ROUTES_NEW_HOME_AND_LAND;
    }
    static get RouteNewBuilder() {
        return ROUTES_NEW_BUILDER;
    }
    static get RouteNewHomeDesign() {
        return ROUTES_NEW_HOME_DESIGN;
    }
    static get RouteSearchNewApartment() {
        return ROUTES_NEW_APARTMENTS_ID_APARTMENT;
    }
    static get RouteSearchNewLand() {
        return ROUTES_NEW_LAND_ID_LAND;
    }
    static get RouteSearchNewHomeAndLand() {
        return ROUTES_NEW_HOME_AND_LAND_ID_HOME_AND_LAND;
    }
    static get RouteSearchNewBuilder() {
        return ROUTES_NEW_BUILDER_ID_BUILDER;
    }
    static get RouteSearchNewHomeDesign() {
        return ROUTES_NEW_HOME_DESIGN_ID_HOME_DESIGN;
    }
    static get RouteDetailNewApartment() {
        return ROUTES_PROJECT_NEW_APARTMENTS_ID_APARTMENT;
    }
    static get RouteDetailNewLand() {
        return ROUTES_PROJECT_NEW_LANDS_ID_LAND;
    }
    static get RouteDetailNewHomeAndLand() {
        return ROUTES_PROJECT_NEW_HOME_AND_LAND_ID_HOME_AND_LAND;
    }
    static get RouteDetailNewBuilder() {
        return ROUTES_PROJECT_NEW_BUILDER_ID_BUILDER;
    }
    static get RouteDetailNewHomeDesign() {
        return ROUTES_PROJECT_NEW_HOME_DESIGN_ID_HOME_DESIGN;
    }

    // News
    static get RouteNews() {
        return ROUTES_NEWS;
    }

    // Collections
    static get RouteCollectionsSavedProperties() {
        return ROUTES_COLLECTIONS_SAVED_PROPERTIES;
    }
    static get RouteCollectionsPlannedInspections() {
        return ROUTES_COLLECTIONS_PLANNED_INSPECTIONS;
    }
    // static get RouteCollectionsInspectionPlanIndex() {
    //     return ROUTES_COLLECTIONS_INSPECTION_PLAN_INDEX;
    // }
    static get RouteCollectionsInspectionPlanAll() {
        return ROUTES_COLLECTIONS_INSPECTION_PLAN_ALL;
    }
    static get RouteCollectionsEnquiredProperties() {
        return ROUTES_COLLECTIONS_ENQUIRED_PROPERTIES;
    }
    static get RouteCollectionsHiddenProperties() {
        return ROUTES_COLLECTIONS_HIDDEN_PROPERTIES;
    }
    static get RouteCollectionItems() {
        return ROUTES_COLLECTIONS_ITEMS;
    }

    // Profile
    static get RouteProfile() {
        return ROUTES_PROFILE;
    }
    static get RouteProfileAccountSettings() {
        return ROUTES_PROFILE_ACCOUNT_SETTINGS;
    }
    static get RouteProfileMyProfile() {
        return ROUTES_PROFILE_MY_PROFILE;
    }
    static get RouteProfileMyRentalListings() {
        return ROUTES_PROFILE_MY_RENTAL_LISTINGS;
    }
    static get RouteProfileRenterProfile() {
        return ROUTES_PROFILE_RENTER_PROFILE;
    }
    static get RouteProfileRentalApplication() {
        return ROUTES_PROFILE_RENTAL_APPLICATION;
    }
    static get RouteProfileSavedSearches() {
        return ROUTES_PROFILE_SAVED_SEARCHES;
    }
    static get RouteProfileTrackYourProperty() {
        return ROUTES_PROFILE_TRACK_YOUR_PROPERTY;
    }
    static get RouteProfileTrackYourPropertyDetails() {
        return ROUTES_PROFILE_TRACK_YOUR_PROPERTY_DETAILS;
    }
    static get RouteProfileMyProperty() {
        return ROUTES_PROFILE_MY_PROPERTIES;
    }
    static get RouteProfileUpdateEmail() {
        return ROUTES_PROFILE_UPDATE_EMAIL;
    }
    static get RouteProfileUpdatePassword() {
        return ROUTES_PROFILE_UPDATE_PASSWORD;
    }

    // Renter Profile Sub Menu
    static get RouteRenterProfileAboutMe() {
        return ROUTES_RENTER_PROFILE_ABOUT_ME;
    }
    static get RouteRenterProfileAddressHistory() {
        return ROUTES_RENTER_PROFILE_ADDRESS_HISTORY;
    }
    static get RouteRenterProfileEmergencyContact() {
        return ROUTES_RENTER_PROFILE_EMERGENCY_CONTACT;
    }
    static get RouteRenterProfileEmployment() {
        return ROUTES_RENTER_PROFILE_EMPLOYMENT;
    }
    static get RouteRenterProfileIdentityDocuments() {
        return ROUTES_RENTER_PROFILE_IDENTITY_DOCUMENTS;
    }
    static get RouteRenterProfileIncome() {
        return ROUTES_RENTER_PROFILE_INCOME;
    }
    static get RouteRenterProfilePeople() {
        return ROUTES_RENTER_PROFILE_PEOPLE;
    }
    static get RouteRenterProfilePersonalDetails() {
        return ROUTES_RENTER_PROFILE_PERSONAL_DETAILS;
    }
    static get RouteRenterProfilePets() {
        return ROUTES_RENTER_PROFILE_PETS;
    }
    static get RouteRenterProfileTenantCheck() {
        return ROUTES_RENTER_PROFILE_TENANT_CHECK;
    }
    static get RouteRenterProfileUtilityConnectionService() {
        return ROUTES_RENTER_PROFILE_UTILITY_CONNECTION_SERVICE;
    }
    static get RouteAdvertiseApplication() {
        return ROUTES_ADVERTISE_APPLICATION;
    }    
    
}

