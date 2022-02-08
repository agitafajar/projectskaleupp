import Tesrouter from './components/Help.vue';
import Help from './components/Help';
import Landingpage from './layouts/Landingpage';
import Businesshealth from './layouts/Businesshealth';
import Businesshealthscreening from './layouts/Businesshealthscreening';
import Finalresultone from './components/businesshealth/Finalresultone';
import Finalresulttwo from './components/businesshealth/Finalresulttwo';
import Finalresultthree from './components/businesshealth/Finalresultthree';
import Industriesagribusiness from './components/industries/Industriesagribusiness';
import Howwehelp from './layouts/Howwehelp';
import Howwehelpsatu from './components/howwehelp/Howwehelpsatu';
import About from './layouts/About';
import Insights from './layouts/Insights';
import Insightone from './components/insight/Insightone';
import Careers from './layouts/Careers';
import Careersatu from './components/career/Careersatu';
import Applycareersatu from './components/career/Applycareersatu';

export default [
    {
        path: '/',
        component:Landingpage,
        name: 'landingpage'
    },
    {
        path: '/businesshealth',
        component: Businesshealth,
        name: 'businesshealth',
        children: [
            {
                path: 'tesrouter',
                component:Tesrouter,
                name: 'tesrouter'
            },
            {
                path: 'help',
                component: Help,
                name: 'help',
            }
        ]
    },
    {
        path: '/businesshealthscreening',
        component:Businesshealthscreening,
        name: 'businesshealthscreening'
    },
    {
        path: '/businesshealth/finalresultone',
        component:Finalresultone,
        name: 'finalresultone'
    },
    {
        path: '/businesshealth/finalresulttwo',
        component:Finalresulttwo,
        name: 'finalresulttwo'
    },
    {
        path: '/businesshealth/finalresultthree',
        component:Finalresultthree,
        name: 'finalresultthree'
    },
    {
        path: '/Industries/agribusiness',
        component:Industriesagribusiness,
        name: 'industriesagribusiness'
    },
    {
        path: '/Howwehelp',
        component:Howwehelp,
        name: 'howwehelp'
    },
    {
        path: '/Howwehelpsatu',
        component:Howwehelpsatu,
        name: 'howwehelpsatu'
    },
    {
        path: '/About',
        component:About,
        name: 'about'
    },
    {
        path: '/Insights',
        component:Insights,
        name: 'insight'
    },
    {
        path: '/Insights/insightone',
        component:Insightone,
        name: 'insightone'
    },
    {
        path: '/Careers',
        component:Careers,
        name: 'careers'
    },
    {
        path: '/Careers/careersatu',
        component:Careersatu,
        name: 'careerssatu'
    },
    {
        path: '/Careers/applycareersatu',
        component:Applycareersatu,
        name: 'applycareerssatu'
    },
];

