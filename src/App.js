import './App.css';
import "./styles/dekstop.css"
import "./styles/find_agents.css"
import "./styles/agency.css"
import "./styles/buy_list.css"
import "./styles/text_global.css"

// routes dependencies injection
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// all routes
import RoutesPage from './Routes';

// all page 
import Home from './pages/Home';
import BuyList from './pages/BuyList/BuyList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { NewHomes, SearchNewHomes, DetailNewHomes, SearchNewHomeAndLand, DetailNewHomesAndLand, SearchBuilder, Builders, HomeDesign } from './pages/NewHomes';
import FindAgent from './pages/FindAgent/Page';
import { FindAgentDetail } from './pages/FindAgentDetail';
import { Agency } from './pages/Agency';
import { Agent } from './pages/Agent';
import { News, Guides, Insights, LifeStyle, Video } from './pages/NewsPage';
import { Act, BuyingBuilding, InterestRates, Nsw, Nt, PropertyMarketing, Qld, Sa, SustainableHome, Tas, Vic, Wa } from './pages/NewsPage/NewsTabs';
import { Buying, Renting, Selling, Investing, Building, Finance, Sustainbility, SafetySecurity, Insurance, Moving } from './pages/NewsPage/GuidesTabs';
import IndoorStyle from './pages/NewsPage/LifeStyleTabs/IndoorStyle';
import { DreamHomes, OrganisingCleaning, OutdoorLiving, Renovating, Travel } from './pages/NewsPage/LifeStyleTabs';
import { Collections, InspectionPlanIndex, InspectionPlanAll, EnquiredProperties, HiddenProperties } from './pages/Collections';
import { Profile, AccountSettings, MyProfile, MyRentalListings, RenterProfile, RentalApplication, SavedSearches, UpdateEmail, UpdatePassword } from './pages/Profile';
import { AboutMe, AddressHistory, EmergencyContact, Employment, IdentityDocuments, Income, People, PersonalDetails, Pets, TenantCheck, UtilityConnectionService } from './pages/Profile/RenterProfileSubMenu';
import { FindAgentAppraisal } from './pages/FindAgentAppraisal';
import { FindAgentAppraisalDetail } from './pages/FindAgentAppraisalDetail';
import TrackYourProperty from './pages/Profile/TrackYourProperty';
import TrackYourPropertyDetails from './pages/Profile/TrackYourProperty/pages/TrackYourPropertyDetails';
import { BuyDetail } from './pages/BuyDetail';
import MyProperties from './pages/Profile/TrackYourProperty/pages/MyProperties';
import CollectionDetail from './pages/Collections/CollectionDetail';
import AdsAgency from './pages/Advertise/AdvertiseAgency';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path={RoutesPage.RouteBuy} element={<Home />} />
        <Route path={RoutesPage.RoutesBuyID} element={<BuyDetail  />} />


        <Route path={RoutesPage.RouteRent} element={<Home />} />
        <Route path={RoutesPage.RoutesSold} element={<Home />} />
        <Route path={RoutesPage.RoutesBuyList} element={<BuyList />} />
        <Route path={RoutesPage.RoutesBuyMap} element={<BuyList />} />
        <Route path={RoutesPage.RoutesBuyInspections} element={<BuyList />} />
        <Route path={RoutesPage.RoutesSaveSearch} element={<BuyList />} />
        
        <Route path={RoutesPage.RouteNewHome} element={<NewHomes withSearch={false} route="new-homes" />} />
        <Route path={RoutesPage.RouteNewApertment} element={<NewHomes withSearch={true} route="new-apartments" />} />
        <Route path={RoutesPage.RouteNewLand} element={<NewHomes withSearch={true} route="new-land" />} />
        <Route path={RoutesPage.RouteNewHomeAndLand} element={<NewHomes withSearch={true} route="new-home-and-land" />} />
        <Route path={RoutesPage.RouteNewBuilder} element={<NewHomes withSearch={true} route="new-builder" />} />
        <Route path={RoutesPage.RouteNewHomeDesign} element={<NewHomes withSearch={true} route="new-home-design" />} />
        
        <Route path={RoutesPage.RouteSearchNewApartment} element={<SearchNewHomes route="new-apartments" />} />
        <Route path={RoutesPage.RouteSearchNewLand} element={<SearchNewHomes route="new-land" />} />
        <Route path={RoutesPage.RouteSearchNewHomeAndLand} element={<SearchNewHomeAndLand route="new-home-and-land" />} />
        <Route path={RoutesPage.RouteSearchNewBuilder} element={<SearchBuilder withSearch={true} route="new-builder" />} />
        <Route path={RoutesPage.RouteSearchNewHomeDesign} element={<SearchBuilder withSearch={true} route="new-home-design" />} />

        <Route path={RoutesPage.RouteDetailNewApartment} element={<DetailNewHomes route="new-apartments" />} />
        <Route path={RoutesPage.RouteDetailNewLand} element={<DetailNewHomes route="new-land" />} />
        <Route path={RoutesPage.RouteDetailNewHomeAndLand} element={<DetailNewHomesAndLand route="new-home-and-land" />} />

        <Route path={RoutesPage.RouteDetailNewBuilder} element={<Builders withSearch={true} route="new-builder" />} />
        <Route path={RoutesPage.RouteDetailNewHomeDesign} element={<HomeDesign withSearch={true} route="new-home-design" />} />
        
        {/* auth */}
        <Route path={RoutesPage.RouteLogin} element={<Login />} />
        <Route path={RoutesPage.RouteSignUp} element={<Signup />} />
        {/* agent and agencies */}
        <Route path={RoutesPage.RouteFindAgent} element={<FindAgent />} />
        <Route path={RoutesPage.RouteFindAgentDetail} element={<FindAgentDetail />} />
        <Route path={RoutesPage.RouteFindAgentAppraisal} element={<FindAgentAppraisal />} />
        <Route path={RoutesPage.RouteFindAgentAppraisalDetail} element={<FindAgentAppraisalDetail />} />
        <Route path={RoutesPage.RouteAgencyID} element={<Agency />} />
        <Route path={RoutesPage.RouteAgentID} element={<Agent />} />

        {/* collections */}
        <Route path={RoutesPage.RouteCollectionsSavedProperties} element={<Collections />} />
        <Route path={RoutesPage.RouteCollectionsPlannedInspections} element={<Collections />} />
        {/* <Route path={RoutesPage.RouteCollectionsInspectionPlanIndex} element={<InspectionPlanIndex route="planner" />} /> */}
        <Route path={RoutesPage.RouteCollectionsInspectionPlanAll} element={<InspectionPlanAll route="collections/inspections" />} />
        <Route path={RoutesPage.RouteCollectionsEnquiredProperties} element={<EnquiredProperties route="collections/enquired" />} />
        <Route path={RoutesPage.RouteCollectionsHiddenProperties} element={<HiddenProperties route="collections/hidden"/>} />
        <Route path={RoutesPage.RouteCollectionItems} element={<CollectionDetail />} />

        {/* news */}
        <Route path={RoutesPage.RouteNews} element={<News />} />
        <Route path={RoutesPage.RouteNewsIntrestRates} element={<InterestRates />} />
        <Route path={RoutesPage.RouteNewsPropertyMarket} element={<PropertyMarketing />} />
        <Route path={RoutesPage.RouteNewsBuyingBuilding} element={<BuyingBuilding />} />
        <Route path={RoutesPage.RouteNewsSustainableHome} element={<SustainableHome />} />
        <Route path={RoutesPage.RouteNewsNsw} element={<Nsw />} />
        <Route path={RoutesPage.RouteNewsVic} element={<Vic />} />
        <Route path={RoutesPage.RouteNewsQld} element={<Qld />} />
        <Route path={RoutesPage.RouteNewsSa} element={<Sa />} />
        <Route path={RoutesPage.RouteNewsTas} element={<Tas />} />
        <Route path={RoutesPage.RouteNewsNt} element={<Nt />} />
        <Route path={RoutesPage.RouteNewsAct} element={<Act />}/>
        <Route path={RoutesPage.RouteNewsWa} element={<Wa />}/>

        <Route path={RoutesPage.RouteInsignts} element={<Insights />} />

        <Route path={RoutesPage.RouteGuides} element={<Guides />} />
        <Route path={RoutesPage.RouteGuidesBuying} element={<Buying />} />
        <Route path={RoutesPage.RouteGuidesSelling} element={<Selling />} />
        <Route path={RoutesPage.RouteGuidesInvesting} element={<Investing />} />
        <Route path={RoutesPage.RouteGuidesRenting} element={<Renting />} />
        <Route path={RoutesPage.RouteGuidesBuilding} element={<Building />} />
        <Route path={RoutesPage.RouteGuidesFinance} element={<Finance />} />
        <Route path={RoutesPage.RouteGuidesInsurance} element={<Insurance />} />
        <Route path={RoutesPage.RouteGuidesMoving} element={<Moving />} />
        <Route path={RoutesPage.RouteGuidesSustainbility} element={<Sustainbility />} />
        <Route path={RoutesPage.RouteGuidesSafeSecurity} element={<SafetySecurity />} />

        <Route path={RoutesPage.RouteLifeStyle} element={<LifeStyle />} />
        <Route path={RoutesPage.RouteLifeStyleIndoorStyle} element={<IndoorStyle />} />
        <Route path={RoutesPage.RouteLifeStyleOutdoorLiving} element={<OutdoorLiving />} />
        <Route path={RoutesPage.RouteLifeStyleDreamHouse} element={<DreamHomes />} />
        <Route path={RoutesPage.RouteLifeStyleRenovating} element={<Renovating />} />
        <Route path={RoutesPage.RouteLifeStyleOrganisingCleaning} element={<OrganisingCleaning />} />
        <Route path={RoutesPage.RouteLifeStyleTravel} element={<Travel />} />
        
        <Route path={RoutesPage.RouteVideo} element={<Video />} />


        {/* profile */}
        <Route path={RoutesPage.RouteProfile} element={<Profile />} />
        <Route path={RoutesPage.RouteProfileAccountSettings} element={<AccountSettings route="my-real-estate/account"/>} />
        <Route path={RoutesPage.RouteProfileMyProfile} element={<MyProfile route="profile"/>} />
        <Route path={RoutesPage.RouteProfileMyRentalListings} element={<MyRentalListings route="advertise-property-for-rent/manage-listings"/>} />
        <Route path={RoutesPage.RouteProfileRenterProfile} element={<RenterProfile route="rent/renter-profile"/>} />
        <Route path={RoutesPage.RouteProfileRentalApplication} element={<RentalApplication route="rent/applications"/>} />
        <Route path={RoutesPage.RouteProfileSavedSearches} element={<SavedSearches route="saved-searches"/>} />
        <Route path={RoutesPage.RouteProfileTrackYourProperty} element={<TrackYourProperty />} />
        <Route path={RoutesPage.RouteProfileTrackYourPropertyDetails} element={<TrackYourPropertyDetails />} />
        <Route path={RoutesPage.RouteProfileMyProperty} element={<MyProperties />} />
        <Route path={RoutesPage.RouteProfileUpdateEmail} element={<UpdateEmail />} />
        <Route path={RoutesPage.RouteProfileUpdatePassword} element={<UpdatePassword />} />
        
        {/* renter profile sub menu */}
        <Route path={RoutesPage.RouteRenterProfileAboutMe} element={<AboutMe route="rent/renter-profile/about-me"/>} />
        <Route path={RoutesPage.RouteRenterProfileAddressHistory} element={<AddressHistory />} />
        <Route path={RoutesPage.RouteRenterProfileEmergencyContact} element={<EmergencyContact />} />
        <Route path={RoutesPage.RouteRenterProfileEmployment} element={<Employment />} />
        <Route path={RoutesPage.RouteRenterProfileIdentityDocuments} element={<IdentityDocuments />} />
        <Route path={RoutesPage.RouteRenterProfileIncome} element={<Income />} />
        <Route path={RoutesPage.RouteRenterProfilePeople} element={<People />} />
        <Route path={RoutesPage.RouteRenterProfilePersonalDetails} element={<PersonalDetails />} />
        <Route path={RoutesPage.RouteRenterProfilePets} element={<Pets />} />
        <Route path={RoutesPage.RouteRenterProfileTenantCheck} element={<TenantCheck />} />
        <Route path={RoutesPage.RouteRenterProfileUtilityConnectionService} element={<UtilityConnectionService />} />
        <Route path={RoutesPage.RouteAdvertiseApplication} element={<AdsAgency/>} />
      </Routes>
    </Router>
  );
}

export default App;
