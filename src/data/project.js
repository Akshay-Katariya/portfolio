export const ProjectData = [
	{
		id: '0',
		title: 'MGDA:</br>Moving Goods Driver App',
		intro:
			'MGDA is an AV based application. In which driver get trips according to the current location. Driver needs to “Accept/Reject” the trip. The driver pick up the goods from origin and deliver to respective recipient. Whole mobile app is developed in React native(iOS) and backend is managed by TAAS, which is responsible for dispatching the trips to the driver.',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Revamped trip screen for mobile app for better accessibility and keep driver more focused while driving',
			'Integrated <b>trip queueing</b> so that driver can accept multiple trips for the day',
			'Schedule view so that driver can view all of his upcoming trips for the day',
			'Implemented full screen turn by turn navigation using Mapbox',
			'Fully automated test suite using <b>Jest & Detox</b>',
			'Achieve an ambitious KPI of taking <b>code coverage from 70% to 90%</b> i.e 25% more test case and code coverage',
			'Resolved socket connectivity issue for timely updates',
		],
		techStack: [
			'React-Native 0.64',
			'TypeScript',
			'Socket-io',
			'Mapbox',
			'Context-API',
			'AWS-amplify',
			'QR-Scan',
			'Jest',
			'react-native-testing-library',
		],
	},
	{
		id: '1',
		title: 'EMAT:</br>Electronic Market Access Tool',
		intro:
			'An application for agronomists and grower to calculate the residue level left on crop and determine the exporting countries and supermarket. Currently, live in 4 country and pilot test in 6 countries.',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Managed over <b>5+ lac records</b> of master data in sqlite database',
			'Implemented dynamic localization for 4 country',
			'Migrated the whole project from <b>React-Native 0.58 to 0.63</b> and react-navigation from <b>v3 to v5</b> and fixed all other libraries breaking changes',
			'Implemented whole offline functionality with instant and background sync with backend database',
			'Multi user login using <b>Azure AD</b> and email authentication for employees',
			'Developed completely reusable calculation algorithm and used in <b>mobile and web platforms</b> with written in JS',
			'Refactored the source code by 30% and made reusable components which helped in reducing application bundle size',
		],
		techStack: [
			'React-Native 0.63',
			'Navigation v5',
			'CircleCI',
			'Sqlite',
			'Jest',
			'Redux',
			'Firebase',
			'Phrase',
			'Moment-js',
			'pdf-lib',
			'SVG charts',
			'crypto-js',
			'Jets',
		],
		demoLink: 'http://shorturl.at/eghkC',
	},
	{
		id: '2',
		title: 'Cropwise Base',
		intro:
			'All-in-one digital farming solution. A application for agronomist which helps them to manage large fields and keep track of various seasonal crops and help grower by providing accurate analysis of weather and best',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Implemented 100% automated CI-CD pipeline for Android and iOS app using CircleCI & Fastlane and deployed app on AppCenter and TestFlight for testing along with Slack integration',
			'Created <b>bridging module</b> between native & React Native components',
			'Integrated <b>Sentry</b> for bug tracking and resolved all bugs before release',
			"Collected all analytical data with <b>Segment & Amplitude</b> and created whole dashboard according to business KPI's to measure the success of application",
		],
		techStack: [
			'React-Native 0.62',
			'Navigation v5',
			'TypeScript',
			'CircleCI',
			'Realm',
			'Redux',
			'Amplitude',
			'Sentry',
			'Mapbox',
			'Axios',
		],
		demoLink: 'https://www.cropwise.com/#apps',
	},
	{
		id: '3',
		title: 'BYDV:</br>Barley Yellow Dwarf Virus',
		intro:
			'A scouting app designed to aid in spray timing to control Barley yellow dwarf virus (BYDV). Available on AppStore and PlayStore',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Reduced weather service API response time from <b>20 to 10 sec</b> by implementing filters and minimizing the time frame of data requested',
			'Implemented offline functionality stored data locally and sync with remote server',
			'Implemented <b>Husky + ESlint + pre-commit hooks</b> to maintain code quality and standard through the application',
			'Passed security test with 90% efficiency',
			'Redesigned whole app with modern UI fixed existing bugs made app more robust',
			"Implemented Amplitude analytics and measured success of the application based on KPI's to make the experience more pleasant",
		],
		techStack: [
			'React-Native 0.59',
			'Redux',
			'thunk',
			'background-fetch',
			'router-flux',
			'svg charts',
			'i18n-js',
			'crypto-js',
		],
		demoLink: 'https://www.syngenta.co.uk/agronomy-tools/BYDV-assist',
		githubLink: 'https://play.google.com/store/apps/details?id=com.bydv_assist&hl=en_IN&gl=US',
	},
	{
		id: '4',
		title: 'TMSC:</br>Tata Motors Service Connect',
		intro:
			'An official app from Tata Motors for the customers of passenger vehicles business which allows them to connect with Tata Motors for his/her after market needs.',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Provided seamless upgrade for all <b>100,000+</b> users on PlayStore',
			'Developed whole app in Kotlin which saved almost <b>15%</b> of development efforts',
			'Session management using retrofit interceptors and provided auto-login functionality',
			'Seamless integration of push notification, firebase analytics and google maps',
		],
		techStack: ['Kotlin 1.3', 'AES encryption', 'OAuth', 'Firebase', 'Maps', 'Retrofit', 'SSL pinning', 'Event Bus'],
		demoLink: 'https://play.google.com/store/apps/details?id=com.ttl.customersocialapp&hl=en_IN',
	},
	{
		id: '5',
		title: 'Boca West',
		intro:
			'Boca West Country Club member app, which allows members to connect to the club faster than before. Member can instantly view the club events, Member Directory, Guest Cards, your own Gift Certificates and the balances and host of other features.',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Provided easy and quick login using fingerprint authentication',
			'Implemented dynamic UI rendering such as recycler view cards, bottom navigation & drawer navigation',
			'White label the whole application to customize the theme and fit client custom requirement',
		],
		techStack: ['Fingerprint', 'OAuth', 'ButterKnife', 'Retrofit', 'Room database', 'Event Bus,'],
		demoLink: 'https://play.google.com/store/search?q=boca%20west&c=apps',
		githubLink: 'https://play.google.com/store/search?q=boca%20west&c=apps',
	},
	{
		id: '6',
		title: 'Secure Parking',
		intro:
			'Developed end-to-end B2B parking system for vendor called Secure Parking including Mobile + Web application portal including dynamic configurable Admin panel which generates 2.5 billion annually over 1,700+ car parks and 1.2 million parking spaces are under operation.',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'Customized Epson P20 <b>thermal printer SDK</b> with dynamic printing options and customized ticket printing',
			'Integrated <b>Bluetooth</b> serial communication with boom barrier and android device which eliminated physical intervention',
			'Implemented Google vision to improve scanning under 0.5 sec that can scan parking tickets and extract all necessary information',
			'Built compatible layouts for both android device and tablet',
			'Implemented <b>AES</b> encryptions and build whole dynamic billing logic for parking tickets',
		],
		techStack: ['Cryptography', 'AES', 'Paytm integration', 'Redux', 'QR Code', 'Epson SDK', 'RFID'],
	},
	{
		id: '7',
		title: 'MyFutball',
		intro:
			'MyFutball is all about Indian football. Provides News/matches/highlights real time on i-League, ISL along with Premier International leagues and matches. A mobile based football platform for India. India`s Football app </br>MyFutball Is Tapping Into The Market Of 170 Million Football Fans Across India with a vision of building a community driven ecosystem for all things football from commerce to publishing.',
		image: require('../assets/images/coding.png'),
		description: '',
		contributions: [
			'First Indian football app with <b>5,000+</b> download with 4.4 ⭐️ on PlayStore',
			'Implemented 3rd party API for live scores and push notification for every important event in game',
			'Weekly release with all critical bug fixes and performance enhancements',
			'Built compatible layouts for both android device and tablet',
			'Implemented AES encryptions and build whole dynamic billing logic for parking tickets',
		],
		techStack: ['Java', 'REST API', 'Retrofit', 'GSON', 'Butterknife', 'Picasso'],
		demoLink: 'https://play.google.com/store/apps/details?id=com.app.myfutball.myfutball&hl=en_IN',
		githubLink: 'https://github.com/Akshay-Katariya',
	},
]
