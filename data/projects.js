var LICENSE = require('./license.js');
var PLATFORM = require('./platform.js');
var SOURCEHOST = require('./sourcehost.js');

module.exports = [

    {
      name: 'ATutor',
      projectUrl: 'http://www.atutor.ca/',
      tags: ['learning management system', 'lms', 'online course'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/atutor/ATutor',
      description: 'An Open Source Web-based Learning Management System (LMS) used to develop and deliver online courses',
      author: 'ATutor',
      authorUrl: 'https://github.com/atutor/',
    },

    {
      name: 'Canvas',
      projectUrl: 'https://www.canvaslms.com/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.RUBY,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/instructure/canvas-lms',
      description: 'The open LMS by Instructure, Inc.',
      author: 'Instructure, Inc.',
      authorUrl: 'https://github.com/instructure/'
    },

    {
      name: 'Caucus',
      projectUrl: 'http://www.caucus.com/',
      tags: ['learning management system', 'lms', 'online course'],
      platform: PLATFORM.JAVA,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://www.caucus.com/down_caucus5.shtml',
      description: 'An open-source, web-based eLearning and discussion platform',
      author: 'Caucus',
      authorUrl: 'http://www.caucus.com/'
    },

    {
      name: 'Chamilo',
      projectUrl: 'https://chamilo.org/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/chamilo/chamilo-lms',
      description: 'A learning management system focusing on ease of use, re-usability, collaboration and sharing',
      author: 'Chamilo',
      authorUrl: 'https://github.com/chamilo/'
    },

    {
      name: 'ELMS LN',
      projectUrl: 'https://www.elmsln.org/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/elmsln/elmsln',
      description: 'An open source educational technology platform for building and sustaining innovation in course technologies',
      author: 'ELMS LN',
      authorUrl: 'https://github.com/elmsln/'
    },

    {
      name: 'Forma LMS',
      projectUrl: 'http://www.formalms.org/',
      tags: ['learning management system', 'lms', 'online course'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'https://sourceforge.net/p/forma/code/HEAD/tree/',
      description: 'An open-source, web-based elearning platform (Learning Management System - LMS), used to manage and deliver online training courses',
      author: 'Forma LMA',
      authorUrl: 'http://www.formalms.org/'
    },

    {
      name: 'ILIAS',
      projectUrl: 'http://www.ilias.de/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ILIAS-eLearning/ILIAS',
      description: 'A powerful Open Source Learning Management System for developing and realising web-based e-learning.',
      author: 'ILIAS',
      authorUrl: 'https://github.com/ILIAS-eLearning/'
    },

    {
      name: 'LAMS',
      projectUrl: 'https://www.lamsfoundation.org/',
      tags: ['learning management system', 'lms', 'online course'],
      platform: PLATFORM.JAVA,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://code.lamsfoundation.org/fisheye/browse/lams',
      description: 'A revolutionary new tool for designing, managing and delivering online collaborative learning activities',
      author: 'LAMS Foundation',
      authorUrl: 'https://www.lamsfoundation.org/'
    },

    {
      name: 'Moodle',
      projectUrl: 'https://moodle.org/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodle/moodle',
      description: 'A learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments',
      author: 'Moodle',
      authorUrl: 'https://github.com/moodle/'
    },

    {
      name: 'OLAT',
      projectUrl: 'http://www.olat.org/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://hg.olat.org/repos/',
      description: 'An open source learning management system (LMS) which delivers learning services for large academic institutions to help their people accomplish a meaningful teaching and learning experience',
      author: 'OLAT',
      authorUrl: 'http://www.olat.org/'
    },

    {
      name: 'Open Elms',
      projectUrl: 'http://www.openelms.org/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.ASP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'http://openelms.cvs.sourceforge.net/viewvc/openelms/openelms/',
      description: 'Open Elms is an open source project designed to create a Learning Management System focussed on the needs of business',
      author: 'Open Elms',
      authorUrl: 'http://www.openelms.org/'
    },

    {
      name: 'Opigno',
      projectUrl: 'https://www.opigno.org/en',
      tags: ['learning management system', 'lms', 'drupal', 'online course'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.DRUPAL,
      sourceUrl: 'http://cgit.drupalcode.org/opigno_lms/tree/',
      description: 'An Open Source e-learning platform based on Drupal that allows you to manage your online trainings, and efficiently ensure that student, employee and partner skills remain up to date',
      author: 'Opigno',
      authorUrl: 'https://www.opigno.org/en'
    },

    {
      name: 'Sakai',
      projectUrl: 'https://www.sakaiproject.org/',
      tags: ['learning management system', 'lms'],
      platform: PLATFORM.JAVA,
      license: LICENSE.ECL2,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'https://source.sakaiproject.org/svn/sakai/',
      description: 'A fully customizable, 100% open source learning management system',
      author: 'Sakai',
      authorUrl: 'https://www.sakaiproject.org/'
    },

    {
      name: 'eduTrac',
      projectUrl: 'https://www.edutracsis.com/',
      tags: ['student information system', 'sis'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'https://sourceforge.net/p/edutrac/code/ci/master/tree/',
      description: 'A free and open source student information system for higher education',
      author: 'eduTrac',
      authorUrl: 'https://www.edutracsis.com/'
    },

    {
      name: 'Fedena',
      projectUrl: 'http://projectfedena.org/',
      tags: ['student information system', 'sis'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/projectfedena/fedena',
      description: 'A free and open-source school management software that has more features than a student information system',
      author: 'Fedena',
      authorUrl: 'https://github.com/projectfedena/'
    },

    {
      name: 'openSIS',
      projectUrl: 'http://www.opensis.com/',
      tags: ['student information system', 'sis'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'https://sourceforge.net/p/opensis-ce/code/HEAD/tree/',
      description: 'A commercial grade, secure, scalable and intuitive Student Information System from OS4ED',
      author: 'openSIS',
      authorUrl: 'http://www.opensis.com/'
    },

    {
      name: 'RosarioSIS',
      projectUrl: 'https://www.rosariosis.org/',
      tags: ['student information system', 'sis'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/francoisjacquet/rosariosis',
      description: 'A free and open-source Student Information System (SIS)',
      author: 'Francois Jacquet',
      authorUrl: 'https://github.com/francoisjacquet/',
    },

    {
      name: 'Shopping Sheet',
      projectUrl: 'https://github.com/ucsbfinaid/Shopping-Sheet',
      tags: ['financial aid', 'shopping sheet'],
      platform: PLATFORM.HTML,
      license: LICENSE.BSD3CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucsbfinaid/Shopping-Sheet',
      description: 'An open-source web template for the Financial Aid Shopping Sheet',
      author: 'UCSB Office of Financial Aid and Scholarships',
      authorUrl: 'https://github.com/ucsbfinaid/'
    },

    {
      name: 'Course Cart',
      projectUrl: 'https://github.com/biola/course-cart',
      tags: ['online course', 'payment', 'touchnet', 'banner'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/biola/course-cart',
      description: 'Online signups and payment for online courses',
      author: 'Biola University',
      authorUrl: 'https://github.com/biola/'
    },

    {
      name: 'BBConnect Sync',
      projectUrl: 'https://github.com/biola/bbconnect-sync',
      tags: ['banner', 'blackboard'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/biola/bbconnect-sync',
      description: 'Syncs contacts from Banner to Blackboard Connect',
      author: 'Biola University',
      authorUrl: 'https://github.com/biola/'
    },

    {
      name: 'Digital Signage',
      projectUrl: 'https://github.com/biola/digital_signage',
      tags: ['digital signage'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/biola/digital_signage',
      description: 'This application is used for managing a collection of digital signs',
      author: 'Biola University',
      authorUrl: 'https://github.com/biola/'
    },

    {
      name: 'VIVO',
      projectUrl: 'http://vivoweb.org/',
      tags: ['research', 'scholarship'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/vivo-project/VIVO',
      description: 'VIVO is an extensible semantic web application for research discovery and showcasing scholarly work',
      author: 'VIVO',
      authorUrl: 'https://github.com/vivo-project/'
    },

    {
      name: 'CentreSIS',
      projectUrl: 'http://centresis.org/',
      tags: ['student information system', 'sis'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/centresis/centresis',
      description: 'The premier open soure student information system',
      author: 'CentreSIS',
      authorUrl: 'https://github.com/centresis/'
    },

    {
      name: 'ETD Application',
      projectUrl: 'https://github.com/Brown-University-Library/etd_app',
      tags: ['thesis', 'dissertation', 'django'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.CCBYSA3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Brown-University-Library/etd_app',
      description: 'Django app for handling Electronic Theses and Dissertations.',
      author: 'Brown University Library',
      authorUrl: 'https://github.com/Brown-University-Library'
    },

    {
      name: 'VIVO Data Management',
      projectUrl: 'https://github.com/Brown-University-Library/vivo-data-management',
      tags: ['vivo'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Brown-University-Library/vivo-data-management',
      description: 'Python and RDFLib tools for managing data for VIVO.',
      author: 'Brown University Library',
      authorUrl: 'https://github.com/Brown-University-Library'
    },

    {
      name: 'ILLiad Client',
      projectUrl: 'https://github.com/Brown-University-Library/illiad-client',
      tags: ['illiad'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Brown-University-Library/illiad-client',
      description: 'A Python library for interacting with the Illiad Interlibrary Loan software.',
      author: 'Brown University Library',
      authorUrl: 'https://github.com/Brown-University-Library'
    },

    {
      name: 'ezid.py',
      projectUrl: 'https://github.com/Brown-University-Library/ezid_api',
      tags: ['ezid'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.UNLICENSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Brown-University-Library/ezid_api',
      description: 'API tools for EZID API.',
      author: 'Brown University Library',
      authorUrl: 'https://github.com/Brown-University-Library'
    },

    {
      name: 'BibApp',
      projectUrl: 'https://github.com/BibApp/BibApp',
      tags: ['faculty', 'research', 'scholarship'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NCSA,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/BibApp/BibApp',
      description: 'A campus research gateway and expert finder.',
      author: 'BibApp',
      authorUrl: 'https://github.com/BibApp'
    },

    {
      name: 'Open Journal Systems',
      projectUrl: 'https://pkp.sfu.ca/ojs/',
      tags: ['journal', 'publishing'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pkp/ojs',
      description: 'A journal management and publishing system',
      author: 'Public Knowledge Project',
      authorUrl: 'https://github.com/pkp'
    },

    {
      name: 'Open Monograph Press',
      projectUrl: 'https://pkp.sfu.ca/omp/',
      tags: ['workflow', 'publishing'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pkp/omp',
      description: 'An open source software platform for managing the editorial workflow required to see monographs, edited volumes and, scholarly editions through internal and external review, editing, cataloguing, production, and publication. ',
      author: 'Public Knowledge Project',
      authorUrl: 'https://github.com/pkp'
    },

    {
      name: 'Open Conference System',
      projectUrl: 'https://pkp.sfu.ca/ocs/',
      tags: ['conference', 'content management system', 'cms'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pkp/ocs',
      description: 'A free Web publishing tool that will create a complete Web presence for your scholarly conference.',
      author: 'Public Knowledge Project',
      authorUrl: 'https://github.com/pkp'
    },

    {
      name: 'Open Harvester Systems',
      projectUrl: 'https://pkp.sfu.ca/ohs/',
      tags: ['metadata', 'index', 'mods', 'marcxml'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pkp/harvester',
      description: 'A free metadata indexing system',
      author: 'Public Knowledge Project',
      authorUrl: 'https://github.com/pkp'
    },

    {
      name: 'DBTracker',
      projectUrl: 'https://github.com/BCLibraries/DBTracker',
      tags: ['libguides', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/BCLibraries/DBTracker',
      description: 'Maintains a locally cached list of databases sourced from the LibGuides databases API and serves it as a (smaller and faster) JSON file.',
      author: 'Boston College Libraries',
      authorUrl: 'https://github.com/BCLibraries'
    },

    {
      name: 'primo-services',
      projectUrl: 'https://github.com/BCLibraries/primo-services',
      tags: ['primo', 'xservice', 'ex libris', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/BCLibraries/primo-services',
      description: 'PHP interface to Primo\'s X-Service Web services',
      author: 'Boston College Libraries',
      authorUrl: 'https://github.com/BCLibraries'
    },

    {
      name: 'php-libguides',
      projectUrl: 'https://github.com/BCLibraries/php-libguides',
      tags: ['libguides', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/BCLibraries/php-libguides',
      description: 'Makes interactions with the LibGuides v2 API using PHP 5.4.0+ even easier',
      author: 'Boston College Libraries',
      authorUrl: 'https://github.com/BCLibraries'
    },

    {
      name: 'php-metalib',
      projectUrl: 'https://github.com/BCLibraries/php-metalib',
      tags: ['ex libris', 'metalib', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/BCLibraries/php-metalib',
      description: 'A tool for working with the Ex Libris\' MetaLib electronic resources federated search tool',
      author: 'Boston College Libraries',
      authorUrl: 'https://github.com/BCLibraries'
    },

    {
      name: 'php-alma',
      projectUrl: 'https://github.com/BCLibraries/php-alma',
      tags: ['alma', 'ex libris', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/BCLibraries/php-alma',
      description: 'Utilities for interacting with Alma Web Services in PHP',
      author: 'Boston College Libraries',
      authorUrl: 'https://github.com/BCLibraries'
    },

    {
      name: 'Digital Signage 2.0',
      projectUrl: 'https://github.com/chapmanu/signage',
      tags: ['digital signage'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/chapmanu/signage',
      description: 'Digital Signage Riding on Rails',
      author: 'Chapman University',
      authorUrl: 'https://github.com/chapmanu'
    },

    {
      name: 'Series25',
      projectUrl: 'https://github.com/chapmanu/series25',
      tags: ['series25', 'collegenet'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/chapmanu/series25',
      description: 'A Ruby wrapper for the CollegeNet Series25 Webservies API',
      author: 'Chapman University',
      authorUrl: 'https://github.com/chapmanu'
    },

    {
      name: 'Digital Signage',
      projectUrl: 'https://github.com/chapmanu/digital-signage',
      tags: ['digital signage'],
      platform: PLATFORM.HTML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/chapmanu/digital-signage',
      description: 'Targeted advertising, information, and emergency notification',
      author: 'Chapman University',
      authorUrl: 'https://github.com/chapmanu'
    },

    {
      name: 'University Tickets',
      projectUrl: 'https://github.com/chapmanu/university_tickets',
      tags: ['universitytickets'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/chapmanu/university_tickets',
      description: 'A Ruby wrapper for University Tickets JSON API',
      author: 'Chapman University',
      authorUrl: 'https://github.com/chapmanu'
    },

    {
      name: 'Social Feed Manager',
      projectUrl: 'http://gwu-libraries.github.io/sfm-ui/',
      tags: ['social', 'collections', 'archive', 'library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/sfm-ui',
      description: 'Harvests social media data from multiple platforms\' public APIs to help archivists, librarians, and researchers to build social media collections.',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'orcid2vivo',
      projectUrl: 'https://github.com/gwu-libraries/orcid2vivo',
      tags: ['orcid', 'vivo', 'library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/orcid2vivo',
      description: 'Tool for retrieving data from the ORCID API and crosswalking to VIVO-ISF.',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'VIVO2NotLD',
      projectUrl: 'https://github.com/gwu-libraries/vivo2notld',
      tags: ['vivo', 'library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/vivo2notld',
      description: 'Provides tools to convert RDF that conforms to the VIVO-ISF Ontology to a more simplified form encoded in JSON, XML, YAML, or other.',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'inventory',
      projectUrl: 'https://github.com/gwu-libraries/inventory',
      tags: ['inventory', 'library', 'collections'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/inventory',
      description: 'A system for tracking location of digital items and progress in reformatting projects',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'DigOps',
      projectUrl: 'https://github.com/gwu-libraries/DigOp',
      tags: ['workflow', 'digitization', 'library', 'django'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/DigOp',
      description: 'A Django App designed to keep track of time spent in different workflow steps involved in digitization of items.',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'idservice',
      projectUrl: 'https://github.com/gwu-libraries/idservice',
      tags: ['identifier', 'library', 'collections', 'noid'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/idservice',
      description: 'Application for the creation of unique identifiers for library collections and items.',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'bagsinspace',
      projectUrl: 'https://github.com/gwu-libraries/bagsinspace',
      tags: ['dspace', 'repository', 'library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/bagsinspace',
      description: 'A script for importing bags into DSpace',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'summoner',
      projectUrl: 'https://github.com/gwu-libraries/summoner',
      tags: ['summon', 'proquest', 'library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gwu-libraries/summoner',
      description: 'Work with the Serial Solutions Summon API from Python.',
      author: 'GWU Libraries',
      authorUrl: 'https://github.com/gwu-libraries'
    },

    {
      name: 'Omeka',
      projectUrl: 'http://omeka.org/',
      tags: ['library', 'museum', 'collections', 'archive', 'exhibitions'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/omeka/Omeka',
      description: 'A flexible web publishing platform for the display of library, museum and scholarly collections, archives and exhibitions.',
      author: 'Omeka',
      authorUrl: 'https://github.com/omeka'
    },

    {
      name: 'Hydra',
      projectUrl: 'https://projecthydra.org/',
      tags: ['repository', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/projecthydra',
      description: 'Hydra is a repository solution that is being used by institutions worldwide to provide access to their digital content',
      author: 'Hydra',
      authorUrl: 'https://github.com/projecthydra'
    },

    {
      name: 'batch-tools',
      projectUrl: 'http://georgetown-university-libraries.github.io/batch-tools/',
      tags: ['dspace', 'repository', 'library', 'collections'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Georgetown-University-Libraries/batch-tools',
      description: 'This code was created by the Georgetown University Libraries to assist in the management of DSpace.',
      author: 'Georgetown University Library',
      authorUrl: 'https://github.com/Georgetown-University-Libraries/'
    },

    {
      name: 'APTUploadVerification',
      projectUrl: 'https://github.com/Georgetown-University-Libraries/APTUploadVerification',
      tags: ['aptrust', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Georgetown-University-Libraries/APTUploadVerification',
      description: 'Command Line Interface to the APTrust API',
      author: 'Georgetown University Library',
      authorUrl: 'https://github.com/Georgetown-University-Libraries/'
    },

    {
      name: 'ASResourceToDSpaceFindingAid',
      projectUrl: 'https://github.com/Georgetown-University-Libraries/ASResourceToDSpaceFindingAid',
      tags: ['archivesspace', 'archive', 'collections', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Georgetown-University-Libraries/ASResourceToDSpaceFindingAid',
      description: 'Extract published resources using the ArchivesSpace API.',
      author: 'Georgetown University Library',
      authorUrl: 'https://github.com/Georgetown-University-Libraries/'
    },

    {
      name: 'GUExtractSierraBibs',
      projectUrl: 'http://georgetown-university-libraries.github.io/GUExtractSierraBibs/',
      tags: ['library', 'sierra'],
      platform: PLATFORM.JAVA,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Georgetown-University-Libraries/GUExtractSierraBibs',
      description: 'This code provides a sample implementation of a BIB and ITEM extract using the Sierra REST API.',
      author: 'Georgetown University Library',
      authorUrl: 'https://github.com/Georgetown-University-Libraries/'
    },

    {
      name: 'DSpace',
      projectUrl: 'http://dspace.org/',
      tags: ['library', 'repository', 'dspace'],
      platform: PLATFORM.JAVA,
      license: LICENSE.BSD3CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/DSpace/DSpace',
      description: 'The DSpace digital asset management system that powers your Institutional Repository',
      author: 'DSpace',
      authorUrl: 'https://github.com/DSpace'
    },

    {
      name: '360Link-Reset',
      projectUrl: 'https://github.com/gvsulib/360Link-Reset',
      tags: ['360link', 'proquest', 'research', 'jquery', 'serials solutions', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gvsulib/360Link-Reset',
      description: 'A tool to radically improve Serials Solutions 360Link Link Resolver',
      author: 'Grand Valley State University Libraries',
      authorUrl: 'https://github.com/gvsulib'
    },

    {
      name: 'Custom Summon Searches',
      projectUrl: 'https://github.com/gvsulib/Custom-Summon-Searches',
      tags: ['summon', 'proquest', 'serials solutions', 'library'],
      platform: PLATFORM.HTML,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gvsulib/Custom-Summon-Searches',
      description: 'A tool to easily created scoped searches for Serial Solutions\' Summon discovery platform.',
      author: 'Grand Valley State University Libraries',
      authorUrl: 'https://github.com/gvsulib'
    },

    {
      name: 'Summon Stats',
      projectUrl: 'https://github.com/gvsulib/Summon-Stats',
      tags: ['summon', 'proquest', 'serials solutions', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gvsulib/Summon-Stats',
      description: 'Capture data about the items patrons actually click on in Summon results lists',
      author: 'Grand Valley State University Libraries',
      authorUrl: 'https://github.com/gvsulib'
    },

    {
      name: 'Millennium Stats',
      projectUrl: 'https://github.com/gvsulib/Millennium-Stats',
      tags: ['webpac', 'millennium'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/gvsulib/Millennium-Stats',
      description: 'Get better statistics on searches in the Millennium WebPAC than III will give you.',
      author: 'Grand Valley State University Libraries',
      authorUrl: 'https://github.com/gvsulib'
    },

    {
      name: 'map it',
      projectUrl: 'https://github.com/harvard-lil/map-it',
      tags: ['library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/harvard-lil/map-it',
      description: 'Helping users locate items in the library stacks.',
      author: 'Harvard Library Innovation Laboratory',
      authorUrl: 'https://github.com/harvard-lil'
    },

    {
      name: 'Computer Lab Availability',
      projectUrl: 'https://github.com/MontclairState/Computer-Lab-Availability',
      tags: ['computer lab'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/MontclairState/Computer-Lab-Availability',
      description: 'Easily track which computers in a lab are in use',
      author: 'Montclair State University',
      authorUrl: 'https://github.com/MontclairState'
    },

    {
      name: 'vagrant archivesspace',
      projectUrl: 'https://github.com/NYULibraries/vagrant-archivesspace',
      tags: ['vagrant', 'archivesspace', 'archive', 'library'],
      platform: PLATFORM.VAGRANT,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NYULibraries/vagrant-archivesspace',
      description: 'A vagrant installer for Archivesspace 1.4',
      author: 'New York University Libraries',
      authorUrl: 'https://github.com/NYULibraries'
    },

    {
      name: 'nyu marcxml export plugin',
      projectUrl: 'https://github.com/NYULibraries/nyu_marcxml_export_plugin',
      tags: ['marcxml', 'archivesspace', 'archive', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NYULibraries/nyu_marcxml_export_plugin',
      description: 'An Archives Space plugin to export resource and item level records to marcxml',
      author: 'New York University Libraries',
      authorUrl: 'https://github.com/NYULibraries'
    },

    {
      name: 'at do cleanup',
      projectUrl: 'https://github.com/NYULibraries/at-do-cleanup',
      tags: ['archivists toolkit', 'archive', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NYULibraries/at-do-cleanup',
      description: 'A utility script to remove duplicate "DigitalObjects" from Archivist\'s Toolkit databases.',
      author: 'New York University Libraries',
      authorUrl: 'https://github.com/NYULibraries'
    },

    {
      name: 'ArchivesSpace',
      projectUrl: 'https://github.com/archivesspace/archivesspace',
      tags: ['archivesspace', 'archive', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.ECL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/archivesspace/archivesspace',
      description: 'ArchivesSpace is the open source archives information management application for managing and providing web access to archives, manuscripts and digital objects.',
      author: 'ArchivesSpace',
      authorUrl: 'https://github.com/archivesspace'
    },

    {
      name: 'QuickSearch',
      projectUrl: 'http://www.lib.ncsu.edu/reports/quicksearch',
      tags: ['search', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NCSU-Libraries/quick_search',
      description: 'QuickSearch is a toolkit for easily creating custom bento-box search applications',
      author: 'North Carolina State University Libraries',
      authorUrl: 'https://github.com/NCSU-Libraries'
    },

    {
      name: 'ArchivesSpace Public',
      projectUrl: 'https://github.com/NCSU-Libraries/aspace_public',
      tags: ['archivesspace', 'archive', 'collections', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NCSU-Libraries/aspace_public',
      description: 'A Ruby on Rails application for presenting archival finding aids that uses data imported from ArchivesSpace.',
      author: 'North Carolina State University Libraries',
      authorUrl: 'https://github.com/NCSU-Libraries'
    },

    {
      name: 'Groovy MARC Extensions',
      projectUrl: 'https://github.com/NCSU-Libraries/groovy-marc',
      tags: ['marc4j', 'marcxml', 'marc', 'library'],
      platform: PLATFORM.GROOVY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NCSU-Libraries/groovy-marc',
      description: 'This project contains a set of Groovy Extensions and utilities for marc4j that allow for more "groovyesque" processing of MARC records.',
      author: 'North Carolina State University Libraries',
      authorUrl: 'https://github.com/NCSU-Libraries'
    },

    {
      name: 'OLE Migration Toolkit',
      projectUrl: 'https://github.com/NCSU-Libraries/ole-migrator-tools',
      tags: ['marc4j', 'ole', 'kuali', 'marc', 'marcxml', 'library'],
      platform: PLATFORM.GROOVY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/NCSU-Libraries/ole-migrator-tools',
      description: 'A toolkit to assist in the initial migration of bibliographic (MARC records, holdings, and items) data into Kuali OLE (hereafter, "OLE") from an existing ILS.',
      author: 'North Carolina State University Libraries',
      authorUrl: 'https://github.com/NCSU-Libraries'
    },

    {
      name: 'MARC4J',
      projectUrl: 'https://github.com/marc4j/marc4j',
      tags: ['marcxml', 'marc', 'marc4j', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.LGPL21,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/marc4j/marc4j',
      description: 'The goal of MARC4J is to provide an easy to use Application Programming Interface (API) for working with MARC and MARCXML in Java.',
      author: 'MARC4J',
      authorUrl: 'https://github.com/marc4j'
    },

    {
      name: 'manage user defined fields',
      projectUrl: 'https://github.com/osulibraries/manage_user_defined_fields',
      tags: ['archivesspace', 'archive', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/osulibraries/manage_user_defined_fields',
      description: 'This ArchivesSpace plugin hides any user defined fields that are default or not used for the specific type of item being created/edited',
      author: 'Ohio State University Libraries',
      authorUrl: 'https://github.com/osulibraries'
    },

    {
      name: 'dspace xmlui theme snazy',
      projectUrl: 'https://github.com/osulibraries/dspace-xmlui-theme-snazy',
      tags: ['dspace', 'repository', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/osulibraries/dspace-xmlui-theme-snazy',
      description: 'DSpace XMLUI theme to add specific view options based on MIMETYPE',
      author: 'Ohio State University Libraries',
      authorUrl: 'https://github.com/osulibraries'
    },

    {
      name: 'dspace stats elasticsearch',
      projectUrl: 'https://github.com/osulibraries/dspace-stats-elasticsearch',
      tags: ['dspace', 'elasticsearch', 'search', 'repository', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/osulibraries/dspace-stats-elasticsearch',
      description: 'Module for using ElasticSearch for DSpace',
      author: 'Ohio State University Libraries',
      authorUrl: 'https://github.com/osulibraries'
    },

    {
      name: 'SelfDeposit',
      projectUrl: 'https://github.com/osulp/selfdeposit',
      tags: ['dspace', 'repository', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/osulp/selfdeposit',
      description: 'A Web-based UI to let researchers self deposit articles and datasets into DSpace-based institutional repository',
      author: 'Oregon State University Libraries and Press',
      authorUrl: 'https://github.com/osulp'
    },

    {
      name: 'ILLiad Request History',
      projectUrl: 'https://github.com/osulp/ILLiad-Request-History',
      tags: ['illiad', 'library'],
      platform: PLATFORM.LUA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/osulp/ILLiad-Request-History',
      description: 'Addon for ILLiad to show previous transactions with the same ISSN or ESP Number.',
      author: 'Oregon State University Libraries and Press',
      authorUrl: 'https://github.com/osulp'
    },

    {
      name: 'Alma Patron Management',
      projectUrl: 'https://github.com/pdxlibrary/alma-patron-load',
      tags: ['alma', 'banner'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/alma-patron-load',
      description: 'This is a big, messy script that converts a CSV export from Banner (Student Information System) to a zip archive of Alma-compatible XML files.',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Primo Send Search To',
      projectUrl: 'https://github.com/pdxlibrary/Primo-Send-Search-To',
      tags: ['ex libris', 'primo back office', 'primo', 'worldcat', 'google scholar', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/Primo-Send-Search-To',
      description: 'Added a facet group to primo to forward the current search to external sites like WorldCat and Google Scholar',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Primo Expandable Facets',
      projectUrl: 'https://github.com/pdxlibrary/Primo-Expandable-Facets',
      tags: ['ex libris', 'primo back office', 'primo', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/Primo-Expandable-Facets',
      description: 'This application overrides the default sidebar facets in Ex Libris Primo to make them expandable/collapsible.',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Primo Text a Call Number',
      projectUrl: 'https://github.com/pdxlibrary/Primo-Text-a-Call-Number',
      tags: ['ex libris', 'primo back office', 'primo', 'library', 'search', 'call number'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/Primo-Text-a-Call-Number',
      description: 'Adds a Text Call Number option to the Actions Menu in the Ex Libris Primo Catalog Search Interface',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Alma Hours Widget',
      projectUrl: 'https://github.com/pdxlibrary/Alma-Hours-Widget',
      tags: ['ex libris', 'alma', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/Alma-Hours-Widget',
      description: 'This application uses the Ex Libris Alma Hours API to create a dynamic HTML hours widget to be used on external websites to display a library\'s upcoming hours.',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Alma Offline Circulation Tool',
      projectUrl: 'https://github.com/pdxlibrary/alma-offline-circulation-tool',
      tags: ['ex libris', 'alma', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.CC0,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/alma-offline-circulation-tool',
      description: 'Replacement for Ex Libris\'s Alma offline circ tool',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Primo Popup Sign In',
      projectUrl: 'https://github.com/pdxlibrary/Primo-Popup-Sign-In',
      tags: ['ex libris', 'primo back office', 'primo', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/Primo-Popup-Sign-In',
      description: 'Updates all the "Sign In" links to redirect them to open a modal dialog popup with Sign In options.',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Primo Guest Sign In Bar',
      projectUrl: 'https://github.com/pdxlibrary/Primo-Guest-Sign-In-Bar',
      tags: ['ex libris', 'primo back office', 'primo', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/Primo-Guest-Sign-In-Bar',
      description: 'Adds a sign-in bar with a link to encourage guest users to login for more results and service options',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'DSpace to Digital Commons Migration',
      projectUrl: 'https://github.com/pdxlibrary/ds2dc',
      tags: ['dspace', 'digital commons', 'repository', 'collections', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pdxlibrary/ds2dc',
      description: 'Scripts used to migrate collections from DSpace to Digital Commons',
      author: 'Portland State University Library',
      authorUrl: 'https://github.com/pdxlibrary'
    },

    {
      name: 'Universal Viewer',
      projectUrl: 'http://universalviewer.io/',
      tags: ['digital artifacts', 'iiif'],
      platform: PLATFORM.HTML,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UniversalViewer/universalviewer',
      description: 'The Universal Viewer is an open source project to enable cultural heritage institutions to present their digital artifacts in a IIIF-compliant and highly customisable user interface.',
      author: 'Universal Viewer',
      authorUrl: 'https://github.com/UniversalViewer'
    },

    {
      name: 'Spotlight',
      projectUrl: 'http://spotlight.projectblacklight.org/',
      tags: ['blacklight', 'collections', 'solr', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/projectblacklight/spotlight',
      description: 'Spotlight enables librarians, curators, and others who are responsible for digital collections to create attractive, feature-rich websites that highlight these collections.',
      author: 'Project Blacklight',
      authorUrl: 'https://github.com/projectblacklight'
    },

    {
      name: 'Blacklight',
      projectUrl: 'http://projectblacklight.org/',
      tags: ['blacklight', 'collections', 'solr', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/projectblacklight/blacklight',
      description: 'Blacklight provides a discovery interface for any Solr index.',
      author: 'Project Blacklight',
      authorUrl: 'https://github.com/projectblacklight'
    },

    {
      name: 'Umlaut',
      projectUrl: 'https://github.com/team-umlaut/umlaut',
      tags: ['library', 'openurl'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/team-umlaut/umlaut',
      description: 'A specific item service provider for libraries',
      author: 'Team Umlaut',
      authorUrl: 'https://github.com/team-umlaut'
    },

    {
      name: 'Plum',
      projectUrl: 'https://github.com/pulibrary/plum',
      tags: ['library', 'hydra', 'curationconcerns', 'digitization', 'workflow'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/plum',
      description: 'Plum: Hydra Head to support digitization workflows',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'MARC Liberation',
      projectUrl: 'https://github.com/pulibrary/marc_liberation',
      tags: ['marc', 'voyager', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/marc_liberation',
      description: 'Web services for retrieving bibliographic and other useful data from Voyager',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'Voyager Helpers',
      projectUrl: 'https://github.com/pulibrary/voyager_helpers',
      tags: ['voyager', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/voyager_helpers',
      description: 'A set of methods for retrieving data from Voyager',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'marc cleanup',
      projectUrl: 'https://github.com/pulibrary/marc_cleanup',
      tags: ['marc', 'voyager', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/marc_cleanup',
      description: 'A collection of Ruby methods to identify errors in MARC records and correct them automatically when possible',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'iiif schemas',
      projectUrl: 'https://github.com/pulibrary/iiif-schemas',
      tags: ['iif', 'relax-ng', 'library'],
      platform: PLATFORM.XML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/iiif-schemas',
      description: 'relax-ng schemas for documents representing iiif primary resource types',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'spiiiffy',
      projectUrl: 'https://github.com/pulibrary/spiiiffy',
      tags: ['iif', 'mets', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/spiiiffy',
      description: 'Creates IIIF manifests from METS files',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'lcsort',
      projectUrl: 'https://github.com/pulibrary/lcsort',
      tags: ['library', 'call number'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/lcsort',
      description: 'Normalized sort key for sorting Library of Congress call numbers.',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'iiif image field',
      projectUrl: 'https://www.drupal.org/sandbox/sdellis/2421047',
      tags: ['iiif', 'drupal', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/pulibrary/iiif_image_field',
      description: 'Drupal module for adding IIIF Images to content types.',
      author: 'Princeton University Library',
      authorUrl: 'https://github.com/pulibrary'
    },

    {
      name: 'ojs Cookbook',
      projectUrl: 'https://github.com/ryersonlibrary/ojs_cookbook',
      tags: ['ojs', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ryersonlibrary/ojs_cookbook',
      description: 'This cookbook will install ojs',
      author: 'Ryerson University Library & Archives',
      authorUrl: 'https://github.com/ryersonlibrary'
    },

    {
      name: 'OJS CAS',
      projectUrl: 'https://github.com/ryersonlibrary/ojs-cas',
      tags: ['ojs', 'cas', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ryersonlibrary/ojs-cas',
      description: 'CAS Plugin for OJS',
      author: 'Ryerson University Library & Archives',
      authorUrl: 'https://github.com/ryersonlibrary'
    },

    {
      name: 'rruopencourses',
      projectUrl: 'https://github.com/royalroads/rruopencourses',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/royalroads/rruopencourses',
      description: 'A Moodle plug-in that automatically opens courses on their start date.',
      author: 'Royal Roads University',
      authorUrl: 'https://github.com/royalroads'
    },

    {
      name: 'StatTutor XBlock',
      projectUrl: 'https://github.com/CMUCTAT/XBlockStattutor',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.CCBYSA4,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/CMUCTAT/XBlockStattutor',
      description: 'The XBlock HTML implementation of the original OLI Flash Statistics tutor',
      author: 'Carnegie Mellon University - Cognitive Tutor Authoring Tools',
      authorUrl: 'https://github.com/CMUCTAT'
    },

    {
      name: 'CTAT Tutors XBlock',
      projectUrl: 'https://github.com/CMUCTAT/XBlockCTAT',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.CCBYSA4,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/CMUCTAT/XBlockStattutor',
      description: 'The CTAT Intelligent Tutor XBlock driver',
      author: 'Carnegie Mellon University - Cognitive Tutor Authoring Tools',
      authorUrl: 'https://github.com/CMUCTAT'
    },

    {
      name: 'Guide on the Side',
      projectUrl: 'http://code.library.arizona.edu/gots/',
      tags: ['library', 'tutorial'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ualibraries/Guide-on-the-Side',
      description: 'A freely available tool that allows librarians to quickly and easily create online, interactive tutorials that are based on the principles of authentic and active learning',
      author: 'The University of Arizona Libraries',
      authorUrl: 'https://github.com/ualibraries'
    },

    {
      name: 'CONTENTdm Collection Harvester',
      projectUrl: 'https://github.com/ubc-library/harvester-contentdm',
      tags: ['contentdm', 'search', 'collections', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc-library/harvester-contentdm',
      description: 'Harvester is used to pull items out of CONTENTdm using the RESTful API, and in turn submit them to an ingestion service (e.g a search service such as elasticsearch, or a disovery layer such as Blacklight perhaps)',
      author: 'The University of British Columbia Library',
      authorUrl: 'https://github.com/ubc-library'
    },

    {
      name: 'banweb',
      projectUrl: 'https://github.com/portlandcc/banweb',
      tags: ['banner'],
      platform: PLATFORM.HTML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/portlandcc/banweb',
      description: 'Scripts and styles to enhance the banner interface.',
      author: 'Portland Community College',
      authorUrl: 'https://github.com/portlandcc'
    },

    {
      name: 'Beehive',
      projectUrl: 'http://beehive.berkeley.edu/',
      tags: ['research', 'search'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucberkeley/Beehive',
      description: 'An application for university departments to facilitate the process of matching undergraduates to research positions.',
      author: 'University of California, Berkeley',
      authorUrl: 'https://github.com/ucberkeley'
    },

    {
      name: 'MOOCchat',
      projectUrl: 'https://github.com/ucberkeley/moocchat',
      tags: ['mooc', 'chat'],
      platform: PLATFORM.RUBY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucberkeley/moocchat',
      description: 'SaaS app for integrating peer learning/peer discussion into MOOCs and similar settings',
      author: 'University of California, Berkeley',
      authorUrl: 'https://github.com/ucberkeley'
    },

    {
      name: 'Digital Media Reserves',
      projectUrl: 'https://github.com/ucsdlib/dmr',
      tags: ['video'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucsdlib/dmr',
      description: 'Digital Media Reserves manages video resources used for courses.',
      author: 'University of California, San Diego Library',
      authorUrl: 'https://github.com/ucsdlib'
    },

    {
      name: 'damsmanager',
      projectUrl: 'https://github.com/ucsdlib/damsmanager',
      tags: ['collections', 'library', 'repository'],
      platform: PLATFORM.JAVA,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucsdlib/damsmanager',
      description: 'DAMS Manager is an ingest, collection management, and statistics application that works with DAMS Repository.',
      author: 'University of California, San Diego Library',
      authorUrl: 'https://github.com/ucsdlib'
    },

    {
      name: 'The UC San Diego Library DAMS repository',
      projectUrl: 'https://github.com/ucsdlib/damsrepo',
      tags: ['library', 'repository', 'hydra'],
      platform: PLATFORM.JAVA,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucsdlib/damsrepo',
      description: 'DAMS Repository is a digital object repository developed at the UC San Diego Library.',
      author: 'University of California, San Diego Library',
      authorUrl: 'https://github.com/ucsdlib'
    },

    {
      name: 'Scripto',
      projectUrl: 'https://github.com/ui-libraries/plugin-Scripto',
      tags: ['transcription', 'omeka', 'drupal', 'wordpress'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ui-libraries/plugin-Scripto',
      description: 'Scripto is an open-source tool developed by Center for History & New Media that allows collaborative transcription of digital files.',
      author: 'University of Iowa Libraries',
      authorUrl: 'https://github.com/ui-libraries/'
    },

    {
      name: 't4Query',
      projectUrl: 'https://github.com/userexec/t4Query',
      tags: ['terminalfour'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/userexec/t4Query',
      description: 'A language superset for the TERMINALFOUR JavaScript layout processor intended to simplify the inclusion of data in your content and page layouts.',
      author: 'userexec',
      authorUrl: 'https://github.com/userexec'
    },

    {
      name: 'openedx certificates',
      projectUrl: 'https://github.com/Stanford-Online/openedx-certificates',
      tags: ['edx', 'xblock', 'xqueue'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/openedx-certificates',
      description: 'This script will continuously monitor an XQueue to generate course certificates for users.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Qualtrics Survey',
      projectUrl: 'https://github.com/Stanford-Online/xblock-qualtrics-survey',
      tags: ['edx', 'xblock', 'qualtrics', 'survey'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/xblock-qualtrics-survey',
      description: 'Xblock for creating a Qualtrics survey.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'JS Input Examples',
      projectUrl: 'https://github.com/Stanford-Online/js-input-samples',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/js-input-samples',
      description: 'JS Input samples for using with edX platform',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'edx theme',
      projectUrl: 'https://github.com/Stanford-Online/edx-theme',
      tags: ['edx', 'theme'],
      platform: PLATFORM.HTML,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/edx-theme',
      description: 'This directory stores a default theme for an Open edX instance.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Submit and Compare XBlock',
      projectUrl: 'https://github.com/Stanford-Online/xblock-submit-and-compare',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/xblock-submit-and-compare',
      description: 'Self Assessment XBlock for the edX Platform',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Image Modal XBlock',
      projectUrl: 'https://github.com/Stanford-Online/xblock-image-modal',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/xblock-image-modal',
      description: 'A fullscreen image modal XBlock.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Free-text Response XBlock',
      projectUrl: 'https://github.com/Stanford-Online/xblock-free-text-response',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/xblock-free-text-response',
      description: 'XBlock to capture a free-text response.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Staff Graded Assignment XBlock',
      projectUrl: 'https://github.com/Stanford-Online/edx-sga',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/edx-sga',
      description: 'Staff Graded Assignment XBlock for the edX platform',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'DoneXBlock',
      projectUrl: 'https://github.com/Stanford-Online/DoneXBlock',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/DoneXBlock',
      description: 'Lets a student mark they\'ve finished an activity.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Xblock GradeMe',
      projectUrl: 'https://github.com/Stanford-Online/xblock-grademe',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/xblock-grademe',
      description: 'Button to send request to server to grade user.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'XBlock MUFI',
      projectUrl: 'https://github.com/Stanford-Online/xblock-mufi',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/xblock-mufi',
      description: 'XBlock for transcribing manuscripts using MUFI font.',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'docker xblock sdk',
      projectUrl: 'https://github.com/Stanford-Online/docker-xblock-sdk',
      tags: ['edx', 'xblock', 'docker'],
      platform: PLATFORM.SHELL,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/docker-xblock-sdk',
      description: 'A Docker container to host the OpenEdx XBlock SDK',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'grunt init xblock',
      projectUrl: 'https://github.com/Stanford-Online/grunt-init-xblock',
      tags: ['edx', 'xblock', 'grunt'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/grunt-init-xblock',
      description: 'A grunt-init template for OpenEdX XBlocks',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'tracking analysis',
      projectUrl: 'https://github.com/Stanford-Online/tracking-analysis',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Stanford-Online/tracking-analysis',
      description: 'Tools for analyzing edX tracking logs',
      author: 'Stanford Online Education',
      authorUrl: 'https://github.com/Stanford-Online'
    },

    {
      name: 'Diagnostic Feedback',
      projectUrl: 'https://github.com/mckinseyacademy/xblock-diagnosticfeedback',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mckinseyacademy/xblock-diagnosticfeedback',
      description: 'This repository provides Diagnostic Feedback Authoring XBlock.',
      author: 'McKinsey Academy',
      authorUrl: 'https://github.com/mckinseyacademy'
    },

    {
      name: 'Open edX Platform',
      projectUrl: 'https://open.edx.org/',
      tags: ['edx', 'lms', 'learning management system', 'online course'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/edx/edx-platform',
      description: 'This is the main edX platform which consists of LMS and Studio.',
      author: 'edX',
      authorUrl: 'https://github.com/edx'
    },

    {
      name: 'Inline Dropdown XBlock',
      projectUrl: 'https://github.com/openlearninginitiative/xblock-inline-dropdown',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/openlearninginitiative/xblock-inline-dropdown',
      description: 'This XBlock provides a way to place dropdown questions inline with other text, for example, in a paragraph.',
      author: 'openlearninginitiative',
      authorUrl: 'https://github.com/openlearninginitiative/'
    },

    {
      name: 'Submit and Compare XBlock',
      projectUrl: 'https://github.com/openlearninginitiative/xblock-submit-and-compare',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/openlearninginitiative/xblock-submit-and-compare',
      description: 'This XBlock provides a way to do an ungraded self assessment activity.',
      author: 'openlearninginitiative',
      authorUrl: 'https://github.com/openlearninginitiative/'
    },

    {
      name: 'edX JSME',
      projectUrl: 'https://github.com/jazkarta/edx-jsme',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/jazkarta/edx-jsme',
      description: 'An XBlock (add on component) for the edX platform which provides a new problem type: "Molecular Structure"',
      author: 'Jazkarta',
      authorUrl: 'https://jazkarta.com/'
    },

    {
      name: 'ScholarSphere',
      projectUrl: 'https://scholarsphere.psu.edu/',
      tags: ['sufia', 'hydra', 'repository'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/psu-stewardship/scholarsphere',
      description: 'A web application for ingest, curation, search, and display of digital assets.',
      author: 'Penn State Digital Stewardship',
      authorUrl: 'https://github.com/psu-stewardship'
    },

    {
      name: 'archivesphere',
      projectUrl: 'https://github.com/psu-stewardship/archivesphere',
      tags: ['repository'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/psu-stewardship/archivesphere',
      description: 'Repository for storing digital archived materials originating from media',
      author: 'Penn State Digital Stewardship',
      authorUrl: 'https://github.com/psu-stewardship'
    },

    {
      name: 'hydra fits',
      projectUrl: 'https://github.com/psu-stewardship/hydra-fits',
      tags: ['hydra', 'fits'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/psu-stewardship/hydra-fits',
      description: 'Hydra fits Instance -- a prepackaged version of the File Information Tool Set (FITS)',
      author: 'Penn State Digital Stewardship',
      authorUrl: 'https://github.com/psu-stewardship'
    },

    {
      name: 'Hydra EZID',
      projectUrl: 'https://github.com/psu-stewardship/hydra-ezid',
      tags: ['hydra', 'ezid'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/psu-stewardship/hydra-ezid',
      description: 'A Ruby gem providing EZID services for Hydra applications',
      author: 'Penn State Digital Stewardship',
      authorUrl: 'https://github.com/psu-stewardship'
    },

    {
      name: 'OpenCASA',
      projectUrl: 'https://github.com/psu-stewardship/OpenCASA',
      tags: ['archive'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/psu-stewardship/OpenCASA',
      description: 'A service architecture, built upon open standards and open source software, providing curatorial and archival functions to applications, such as for ingest, management, discovery, and publishing of digital objects.',
      author: 'Penn State Digital Stewardship',
      authorUrl: 'https://github.com/psu-stewardship'
    },

    {
      name: 'Hydra North',
      projectUrl: 'https://github.com/ualbertalib/HydraNorth',
      tags: ['hydra', 'dam', 'digital asset management system', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ualbertalib/HydraNorth',
      description: 'A DAMS built on Hydra',
      author: 'University of Alberta Libraries',
      authorUrl: 'https://github.com/ualbertalib'
    },

    {
      name: 'sfx2sirsi',
      projectUrl: 'https://github.com/ualbertalib/sfx2sirsi',
      tags: ['sfx', 'sirsi', 'symphony', 'marc', 'marcxml', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ualbertalib/sfx2sirsi',
      description: 'Application to send ILS updated SFX e-journal records',
      author: 'University of Alberta Libraries',
      authorUrl: 'https://github.com/ualbertalib'
    },

    {
      name: 'MODS Oxygen Template',
      projectUrl: 'https://github.com/ualbertalib/MODS-Oxygen-Template',
      tags: ['mods', 'oxygen', 'marc', 'library'],
      platform: PLATFORM.HTML,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ualbertalib/MODS-Oxygen-Template',
      description: 'Framework for editing MODS records in Oxygen',
      author: 'University of Alberta Libraries',
      authorUrl: 'https://github.com/ualbertalib'
    },

    {
      name: 'RubyEDS',
      projectUrl: 'https://github.com/ualbertalib/ruby_eds',
      tags: ['eds', 'ebsco', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ualbertalib/ruby_eds',
      description: 'Ruby wrapper for the EDS API',
      author: 'University of Alberta Libraries',
      authorUrl: 'https://github.com/ualbertalib'
    },

    {
      name: 'mods editor',
      projectUrl: 'https://github.com/ualbertalib/mods-editor',
      tags: ['mods', 'cocoon', 'marc', 'library'],
      platform: PLATFORM.HTML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ualbertalib/mods-editor',
      description: 'A web form to edit MODS records built on Cocoon Forms.',
      author: 'University of Alberta Libraries',
      authorUrl: 'https://github.com/ualbertalib'
    },

    {
      name: 'Lagotto',
      projectUrl: 'http://www.lagotto.io/',
      tags: ['scholarship', 'research'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/lagotto/lagotto',
      description: 'Lagotto allows a user to track events around research articles and other scholarly outputs, including how often a work has been viewed, cited, saved, discussed and recommended.',
      author: 'Lagotto',
      authorUrl: 'http://www.lagotto.io/'
    },

    {
      name: 'ansible hydra',
      projectUrl: 'https://github.com/curationexperts/ansible-hydra',
      tags: ['hydra'],
      platform: PLATFORM.SHELL,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/curationexperts/ansible-hydra',
      description: 'Ansible playbook and roles to build a production-style Hydra Head.',
      author: 'Data Curation Experts',
      authorUrl: 'https://github.com/curationexperts'
    },

    {
      name: 'Dataverse',
      projectUrl: 'http://dataverse.org/',
      tags: ['research', 'repository'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IQSS/dataverse',
      description: 'A data repository framework to share and publish research data.',
      author: 'Institute for Quantitative Social Science',
      authorUrl: 'https://github.com/IQSS'
    },

    {
      name: 'Neatline',
      projectUrl: 'http://neatline.org/',
      tags: ['omeka', 'map'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/Neatline',
      description: 'A lightweight framework for building interactive maps and publishing them on the web.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'XML Import',
      projectUrl: 'https://github.com/scholarslab/GenericXmlImporter',
      tags: ['omeka', 'xml', 'xslt'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/GenericXmlImporter',
      description: 'A plugin for Omeka that allows to import data and files and to update records from one or multiple XML files via a generic or a custom XSLT sheet.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'Library Metric Utilities',
      projectUrl: 'https://github.com/scholarslab/library-metrics',
      tags: ['library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/library-metrics',
      description: 'Scripts and utilities for generating numbers for various library metrics that we\'re required to give every year.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'BulkUsers',
      projectUrl: 'https://github.com/scholarslab/BulkUsers',
      tags: ['omeka'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/BulkUsers',
      description: 'A simple way to add a bunch of users to Omeka at once.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'BagIt PHP',
      projectUrl: 'https://github.com/scholarslab/BagItPHP',
      tags: ['bagit'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/BagItPHP',
      description: 'This is a PHP implementation of the BagIt 0.96 specification',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'SolrSearch',
      projectUrl: 'https://github.com/scholarslab/SolrSearch',
      tags: ['omeka', 'solr', 'search'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/SolrSearch',
      description: 'Add a Solr-backed search interface to Omeka.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'BagIt Omeka Plugin',
      projectUrl: 'https://github.com/scholarslab/BagItPlugin',
      tags: ['bagit', 'omeka', 'dropbox'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/BagItPlugin',
      description: 'Omeka plugin that implements the BagIt specification for storing collections of files.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'Fedora Connector',
      projectUrl: 'https://github.com/scholarslab/FedoraConnector',
      tags: ['fedora', 'omeka'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/FedoraConnector',
      description: 'This is an Omeka plugin for importing items from a Fedora Commons repository.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'Geoloader',
      projectUrl: 'https://github.com/scholarslab/Geoloader',
      tags: ['geotiff', 'shapefile', 'geoserver', 'geonetwork', 'solr'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/Geoloader',
      description: 'Load GeoTIFFs and Shapefiles into Geoserver, Geonetwork, and Solr.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'TeiDisplay',
      projectUrl: 'https://github.com/scholarslab/TeiDisplay',
      tags: ['tei', 'omeka'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/TeiDisplay',
      description: 'Attach TEI documents to Omeka items.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'VraCoreElementSet',
      projectUrl: 'https://github.com/scholarslab/VraCoreElementSet',
      tags: ['art', 'artifact'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/VraCoreElementSet',
      description: 'A semantically appropriate schema for describing art and artifacts.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'Timeline',
      projectUrl: 'https://github.com/scholarslab/Timeline',
      tags: ['simile', 'timeline'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/Timeline',
      description: 'A helper function for creating SIMILE Timelines from an array of items.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'EAD Importer',
      projectUrl: 'https://github.com/scholarslab/EadImporter',
      tags: ['ead', 'xsl', 'xml'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/EadImporter',
      description: 'User may select an EAD finding aid from their hard drive to upload to the server, where the XML undergoes an XSL transformation',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'Omeka Plugin Template',
      projectUrl: 'https://github.com/scholarslab/OmekaPluginStarterKit',
      tags: ['omeka'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/OmekaPluginStarterKit',
      description: 'Contains the basic directory structure and files needed for an Omeka plugin.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'Omeka Theme Minifier',
      projectUrl: 'https://github.com/scholarslab/omeka-theme-minify',
      tags: ['omeka'],
      platform: PLATFORM.PHP,
      license: LICENSE.UNLICENSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/omeka-theme-minify',
      description: 'Scripts to minify CSS and Javascripts; as well as optimize image assets',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'geordf',
      projectUrl: 'https://github.com/scholarslab/geordf',
      tags: ['rdf', 'geotools', 'jena'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/scholarslab/geordf',
      description: 'Adds RDF output abilities to geotools through Jena.',
      author: 'Scholars\' Lab',
      authorUrl: 'https://github.com/scholarslab'
    },

    {
      name: 'EPrints',
      projectUrl: 'http://www.eprints.org/uk/index.php/eprints-software/',
      tags: ['document management'],
      platform: PLATFORM.PERL,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/eprints/eprints',
      description: 'EPrints is a document management system aimed at Higher Educational institutions and individuals.',
      author: 'EPrints',
      authorUrl: 'https://github.com/eprints'
    },

    {
      name: 'SUSHI Lite plugin for OJS',
      projectUrl: 'https://github.com/ulsdevteam/ojs-sushiLite-plugin',
      tags: ['ojs', 'sushi', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ulsdevteam/ojs-sushiLite-plugin',
      description: 'This plugin provides the NISO SUSHI-Lite standard for PKP Open Journal Systems.',
      author: 'University of Pittsburgh - University Library System',
      authorUrl: 'https://github.com/ulsdevteam'
    },

    {
      name: 'eprints marc',
      projectUrl: 'https://github.com/ulsdevteam/eprints-marc',
      tags: ['eprints', 'marc', 'marcxml', 'library'],
      platform: PLATFORM.XML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ulsdevteam/eprints-marc',
      description: 'Stylesheet transform of EPrints to MARCXML',
      author: 'University of Pittsburgh - University Library System',
      authorUrl: 'https://github.com/ulsdevteam'
    },

    {
      name: 'ORCID Profile Puller',
      projectUrl: 'https://github.com/ulsdevteam/pkp-orcidprofile',
      tags: ['pkp', 'ojs', 'orcid', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ulsdevteam/pkp-orcidprofile',
      description: 'A plugin to pull ORCID information into a PKP user profile',
      author: 'University of Pittsburgh - University Library System',
      authorUrl: 'https://github.com/ulsdevteam'
    },

    {
      name: 'Plum Analytics Artifact Widget plugin for OJS',
      projectUrl: 'https://github.com/ulsdevteam/ojs-plum-plugin',
      tags: ['pkp', 'ojs', 'plum', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ulsdevteam/ojs-plum-plugin',
      description: 'This plugin provides display of PlumX Metrics from Plum Analytics on the article level for PKP Open Journal Systems.',
      author: 'University of Pittsburgh - University Library System',
      authorUrl: 'https://github.com/ulsdevteam'
    },

    {
      name: 'COUNTER Reports classes',
      projectUrl: 'https://github.com/ulsdevteam/COUNTER',
      tags: ['counter', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ulsdevteam/COUNTER',
      description: 'Convenience interface to PHP\'s DOMDocument for the Project COUNTER schema',
      author: 'University of Pittsburgh - University Library System',
      authorUrl: 'https://github.com/ulsdevteam'
    },

    {
      name: 'Marc to Bibframe Validation',
      projectUrl: 'https://github.com/sul-dlss/marc-to-bibframe-validation',
      tags: ['marc', 'bibframe', 'marcxml', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/marc-to-bibframe-validation',
      description: 'This project is focused on validating particulars of bibframe graphs produced from MARC data.',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'Mods',
      projectUrl: 'https://github.com/sul-dlss/mods',
      tags: ['mods', 'library', 'metadata'],
      platform: PLATFORM.RUBY,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/mods',
      description: 'A Gem to parse MODS (Metadata Object Description Schema) records.',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'Triannon',
      projectUrl: 'https://github.com/sul-dlss/triannon',
      tags: ['rdf', 'open annotation', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/triannon',
      description: 'Store Open Annotation RDF in Fedora4 to support the Linked Data for Libraries use cases.',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'BlacklightHeatmaps',
      projectUrl: 'https://github.com/sul-dlss/blacklight_heatmaps',
      tags: ['blacklight', 'heatmap'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/blacklight_heatmaps',
      description: 'Heatmaps for Blacklight',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'Colligo',
      projectUrl: 'https://github.com/sul-dlss/colligo',
      tags: ['blacklight', 'manuscript', 'collections', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/colligo',
      description: 'Blacklight project to showcase digital manuscripts',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'crez-sw-ingest',
      projectUrl: 'https://github.com/sul-dlss/crez-sw-ingest',
      tags: ['sirsi', 'searchworks', 'solr', 'ingest', 'symphony', 'search', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/crez-sw-ingest',
      description: 'Pulls course reserve dumps from Symphony and updates SearchWorks Solr records as appropriate',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'archive-utils',
      projectUrl: 'https://github.com/sul-dlss/archive-utils',
      tags: ['archive', 'bagit', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/archive-utils',
      description: 'Ruby utilities for archival data (BagIt, Fixity, Tarfile).',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'Blacklight::Oembed',
      projectUrl: 'https://github.com/sul-dlss/blacklight-oembed',
      tags: ['blacklight', 'oembed', 'search', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/blacklight-oembed',
      description: 'OEmbed media views for Blacklight',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'traject_profiling',
      projectUrl: 'https://github.com/sul-dlss/traject_profiling',
      tags: ['traject', 'marc', 'solr', 'search', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/traject_profiling',
      description: 'Traject macros to provide profiling information on MARC bibliographic records.',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'Microservices',
      projectUrl: 'https://github.com/sul-dlss/microservices',
      tags: ['library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/sul-dlss/microservices',
      description: 'This gem implements a number of California Digital Library Curation Microservices.',
      author: 'Stanford University Digital Library',
      authorUrl: 'https://github.com/sul-dlss'
    },

    {
      name: 'uPortal',
      projectUrl: 'https://www.apereo.org/projects/uportal',
      tags: ['portal'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Jasig/uPortal',
      description: 'Enterprise open source portal built by and for the higher education community.',
      author: 'Apereo Foundation',
      authorUrl: 'https://github.com/Jasig'
    },

    {
      name: 'edxcut',
      projectUrl: 'https://github.com/mitodl/edxcut',
      tags: ['edx', 'testing'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/edxcut',
      description: 'edX Course Unit Tests',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'Staff Graded Assignment XBlock',
      projectUrl: 'https://github.com/mitodl/edx-sga',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/edx-sga',
      description: 'This package provides an XBlock for use with the edX platform which provides a staff graded assignment.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'edx2bigquery',
      projectUrl: 'https://github.com/mitodl/edx2bigquery',
      tags: ['edx', 'bigquery'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/edx2bigquery',
      description: 'A tool for importing edX SQL and log data into Google BigQuery for research and analysis.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'sga-lti',
      projectUrl: 'https://github.com/mitodl/sga-lti',
      tags: ['edx', 'lti'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.BSD3CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/sga-lti',
      description: 'An LTI implementation of Staff Graded Assignments, for use with edX',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'edx-api-client',
      projectUrl: 'https://github.com/mitodl/edx-api-client',
      tags: ['edx', 'api'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/edx-api-client',
      description: 'Python interface for edX REST APIs',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'PyLTI',
      projectUrl: 'https://github.com/mitodl/pylti',
      tags: ['lti'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/pylti',
      description: 'A Python implementation of the LTI specification',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'XAnalytics',
      projectUrl: 'https://github.com/mitodl/xanalytics',
      tags: ['edx', 'analytics'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/xanalytics',
      description: 'Provides analytics for edX platform courses, based on SQL and tracking logs data stored in BigQuery.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'edx sandbox',
      projectUrl: 'https://github.com/mitodl/edx-sandbox-formula',
      tags: ['edx', 'saltstack'],
      platform: PLATFORM.SALTSTACK,
      license: LICENSE.BSD3CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/edx-sandbox-formula',
      description: 'SaltStack Formula for building an edX sandbox using edX configuration.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'xbundle',
      projectUrl: 'https://github.com/mitodl/xbundle',
      tags: ['edx', 'olx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/xbundle',
      description: 'Converts back and forth between OLX and "xbundle" style XML formats.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'git2edx',
      projectUrl: 'https://github.com/mitodl/git2edx',
      tags: ['edx', 'git', 'github'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/git2edx',
      description: 'Webhook server for automatic loading of course content from github to edX Studio instances.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'xsiftx',
      projectUrl: 'https://github.com/mitodl/xsiftx',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/xsiftx',
      description: 'A program to run scripts against edx-platform data for a course or all courses and then writing that to the grade book s3 bucket to show up on the instructor dashboard.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'ims lti py',
      projectUrl: 'https://github.com/mitodl/ims_lti_py',
      tags: ['lti'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/ims_lti_py',
      description: 'Python port of the useful ims-lti Ruby library.',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'Sample LTI Provider for Flask',
      projectUrl: 'https://github.com/mitodl/mit_lti_flask_sample',
      tags: ['lti', 'flask'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/mit_lti_flask_sample',
      description: 'A sample LTI provider for the Flask framework',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'Course Tester',
      projectUrl: 'https://github.com/mitodl/openedx-course-test',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/openedx-course-test',
      description: 'Script for validating/testing Open Learning XML courses for the edx-platform using a docker container',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'edx2course axis',
      projectUrl: 'https://github.com/mitodl/edx2course_axis',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/mitodl/edx2course_axis',
      description: 'Python scripts to create a "course axis" from an edX course XML dump',
      author: 'MIT Office of Digital Learning',
      authorUrl: 'https://github.com/mitodl'
    },

    {
      name: 'PTF',
      projectUrl: 'https://github.com/ucdavis/PTF',
      tags: ['facility', 'order'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/PTF',
      description: 'Plant Transformation Facility Experiment and Order Tracking System',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'Gramps',
      projectUrl: 'https://github.com/ucdavis/Gramps',
      tags: ['grant'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/Gramps',
      description: 'Grant Management Application',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'AD419',
      projectUrl: 'https://github.com/ucdavis/AD419',
      tags: ['ad419'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/AD419',
      description: 'Application for Managing AD419 Reporting',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'PrePurchasing',
      projectUrl: 'https://github.com/ucdavis/Purchasing',
      tags: ['purchasing'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/Purchasing',
      description: 'A web application designed to streamline the steps required for making campus acquisitions.',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'Commencement',
      projectUrl: 'https://github.com/ucdavis/Commencement',
      tags: ['commencement'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/Commencement',
      description: 'Handles Commencement Ceremonies for UC Davis',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'ESRA',
      projectUrl: 'https://github.com/ucdavis/ESRA',
      tags: ['salary', 'pps', 'payroll'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/ESRA',
      description: 'Application for comparing employee salaries for the purposes of equity reviews at UC Davis.',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'EligibilityList',
      projectUrl: 'https://github.com/ucdavis/EligibilityList',
      tags: ['merit', 'promotion'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/EligibilityList',
      description: 'Track merits, promotions and eligibilities for your staff.',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'DataDictionary',
      projectUrl: 'https://github.com/ucdavis/DataDictionary',
      tags: ['data', 'oracle'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.BSD2CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucdavis/DataDictionary',
      description: 'An application that collects miscellaneous table and column meta-data from various campus\' Oracle databases and displays that information back out as an on-line data dictionary.',
      author: 'University of California, Davis',
      authorUrl: 'https://github.com/ucdavis'
    },

    {
      name: 'moodle mod zoom',
      projectUrl: 'https://github.com/ucla/moodle-mod_zoom',
      tags: ['moodle', 'zoom'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/moodle-mod_zoom',
      description: 'Moodle plugin for Zoom meeting',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'moodle mod casa',
      projectUrl: 'https://github.com/ucla/moodle-mod_casa',
      tags: ['moodle', 'casa'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/moodle-mod_casa',
      description: 'This plugin helps with the integration of CASA (Community App Sharing Architecture) into Moodle.',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'ohmageX',
      projectUrl: 'http://ohmage.org/',
      tags: ['data', 'research', 'mobile'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/ohmageX',
      description: 'An open-source, mobile to web platform that records, analyzes, and visualizes data from both prompted experience samples entered by the user, as well as continuous streams of data passively collected from sensors or applications onboard the mobile device.',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'moodle atto chemrender',
      projectUrl: 'https://github.com/ucla/moodle-atto_chemrender',
      tags: ['moodle', 'atto', 'chemrender', 'chemistry'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/moodle-atto_chemrender',
      description: 'Chemical structure editor and molecular data file import plugin for the Atto HTML Editor.',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'moodle filter chemrender',
      projectUrl: 'https://github.com/ucla/moodle-filter-chemrender',
      tags: ['moodle', 'atto', 'chemrender', 'chemistry'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/moodle-filter-chemrender',
      description: 'Chemical and molecular data file filter for Moodle 2.7+ using the ChemRender atto editor plugin',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'Invitation Enrollment Plug-in',
      projectUrl: 'https://github.com/ucla/moodle-enrol_invitation',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/moodle-enrol_invitation',
      description: 'Plug-in for Moodle that allows instructor to invite students to their site and grant necessary access and role to them.',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'Syllabus Plug-in',
      projectUrl: 'https://github.com/ucla/moodle-local_syllabus',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucla/moodle-local_syllabus',
      description: 'Plug-in for Moodle that allows for the integration of syllabi into the course.',
      author: 'University of California, Los Angeles',
      authorUrl: 'https://github.com/ucla'
    },

    {
      name: 'IMS Global - LTI Utilities',
      projectUrl: 'https://github.com/IMSGlobal/basiclti-util-java',
      tags: ['lti', 'learning tools interoperability'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/basiclti-util-java',
      description: 'A set of utility classes to aid in the development of LTI v1.0 consumers and providers.',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'LTI Tool Provider Library PHP',
      projectUrl: 'https://github.com/IMSGlobal/LTI-Tool-Provider-Library-PHP',
      tags: ['lti', 'learning tools interoperability'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/LTI-Tool-Provider-Library-PHP',
      description: 'This set of PHP classes encapsulates the code required by a Learning Tools Interoperability (LTI) compliant tool provider to communicate with an LTI tool consumer.',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'caliper net',
      projectUrl: 'https://github.com/IMSGlobal/caliper-net-public',
      tags: ['caliper'],
      platform: PLATFORM.CSHARP,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/caliper-net-public',
      description: 'A .NET client for Caliper that provides an implementation of the Caliper SensorAPI',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'caliper php',
      projectUrl: 'https://github.com/IMSGlobal/caliper-php-public',
      tags: ['caliper'],
      platform: PLATFORM.PHP,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/caliper-php-public',
      description: 'A PHP library for Caliper that provides an implementation of the Caliper SensorAPI',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'caliper ruby',
      projectUrl: 'https://github.com/IMSGlobal/caliper-ruby-public',
      tags: ['caliper'],
      platform: PLATFORM.RUBY,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/caliper-ruby-public',
      description: 'A Ruby client for Caliper that provides an implementation of the Caliper SensorAPI',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'caliper js',
      projectUrl: 'https://github.com/IMSGlobal/caliper-js-public',
      tags: ['caliper'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/caliper-js-public',
      description: 'A Javascript client for Caliper that provides an implementation of the Caliper SensorAPI',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'caliper java',
      projectUrl: 'https://github.com/IMSGlobal/caliper-java-public',
      tags: ['caliper'],
      platform: PLATFORM.JAVA,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/caliper-java-public',
      description: 'A Java client for Caliper that provides an implementation of the Caliper SensorAPI',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'caliper python',
      projectUrl: 'https://github.com/IMSGlobal/caliper-python-public',
      tags: ['caliper'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/IMSGlobal/caliper-python-public',
      description: 'A Python client package for Caliper that provides an implementation of the Caliper SensorAPI',
      author: 'IMS Global Learning Consortium',
      authorUrl: 'https://github.com/IMSGlobal'
    },

    {
      name: 'Coursework Activity',
      projectUrl: 'https://github.com/ULCC/open-mod_coursework',
      tags: ['moodle', 'grading'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/open-mod_coursework',
      description: 'A way to receive coursework and have it marked without teachers knowing which student the work belongs to.',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'block equella tasks',
      projectUrl: 'https://github.com/ULCC/block_equella_tasks',
      tags: ['moodle', 'equella'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/block_equella_tasks',
      description: 'Moodle block for viewing your EQUELLA tasks',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'block equella links',
      projectUrl: 'https://github.com/ULCC/block_equella_links',
      tags: ['moodle', 'equella'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/block_equella_links',
      description: 'Moodle block for providing links into EQUELLA',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'block gsb',
      projectUrl: 'https://github.com/ULCC/block_gsb',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/block_gsb',
      description: 'Allows you to benchmark courses to select criteria based upon activity and resource types and then display a medal to teachers on a course.',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'assignsubmission mahara',
      projectUrl: 'https://github.com/ULCC/mod_assign_submission_mahara',
      tags: ['moodle', 'mahara'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/mod_assign_submission_mahara',
      description: 'Mahara assignment submission plugin for Moodle 2.3+',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'moodle kaltura package',
      projectUrl: 'https://github.com/ULCC/moodle_kaltura_package',
      tags: ['moodle', 'kaltura'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/moodle_kaltura_package',
      description: 'This repository contains the various Moodle plugins that allow the use of Kaltura throughout Moodle',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'moodle theme javascript collapse course navigation',
      projectUrl: 'https://github.com/ULCC/moodle-theme-javascript_collapse_course_navigation',
      tags: ['moodle', 'navigation'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/moodle-theme-javascript_collapse_course_navigation',
      description: 'These files are necessary to auto-collapse the courses menu in the Navigation menu on Moodle.',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'eprints webservices',
      projectUrl: 'https://github.com/ULCC/eprints-webservices',
      tags: ['eprints', 'soap'],
      platform: PLATFORM.WSDL,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/eprints-webservices',
      description: 'Plug-ins for e-Prints that is intended for reception of records under protocol SOAP',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'public moodle block reports',
      projectUrl: 'https://github.com/ULCC/public-moodle-block_reports',
      tags: ['moodle', 'navigation'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/public-moodle-block_reports',
      description: 'Displays the course reports list from Moodle where a user wants to remove the Navigation block',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'moodle format single',
      projectUrl: 'https://github.com/ULCC/moodle-format_single',
      tags: ['moodle', 'navigation'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/moodle-format_single',
      description: 'Displays only a single section at a time - desinged to be used with course menu style navigation',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'moodle block jumpmenu',
      projectUrl: 'https://github.com/ULCC/moodle-block_jumpmenu',
      tags: ['moodle', 'navigation'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/moodle-block_jumpmenu',
      description: 'A navigation block that creates topics as a drop down menu for quick links',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'moodle enrol qualification',
      projectUrl: 'https://github.com/ULCC/moodle-enrol_qualification',
      tags: ['moodle', 'grading'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ULCC/moodle-enrol_qualification',
      description: 'An extension of the meta enrolment plugin which can sync grades/outcomes',
      author: 'University of London Computer Centre',
      authorUrl: 'https://github.com/ULCC'
    },

    {
      name: 'moodle mod questionnaire',
      projectUrl: 'https://github.com/remotelearner/moodle-mod_questionnaire',
      tags: ['moodle', 'survey'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/remotelearner/moodle-mod_questionnaire',
      description: 'The questionnaire module allows you to construct questionnaires (surveys) from a variety of question type.',
      author: 'Remote-Learner',
      authorUrl: 'https://github.com/remotelearner'
    },

    {
      name: 'Moodle Tours Plugin',
      projectUrl: 'https://github.com/remotelearner/moodle-local_tours',
      tags: ['moodle', 'tour', 'tutorial'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/remotelearner/moodle-local_tours',
      description: 'This Moodle plugin allows administrators to create tours of Moodle to introduce new features, important information, and more.',
      author: 'Remote-Learner',
      authorUrl: 'https://github.com/remotelearner'
    },

    {
      name: 'moodle plugin travis',
      projectUrl: 'https://github.com/remotelearner/moodle-plugin-travis',
      tags: ['moodle', 'travis'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/remotelearner/moodle-plugin-travis',
      description: 'The goal of this project is to facilitate the running of tests and code analysis tools against a Moodle plugin in Travis CI.',
      author: 'Remote-Learner',
      authorUrl: 'https://github.com/remotelearner'
    },

    {
      name: 'moodle mod adobeconnect',
      projectUrl: 'https://github.com/remotelearner/moodle-mod_adobeconnect',
      tags: ['moodle', 'adobe connect'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/remotelearner/moodle-mod_adobeconnect',
      description: 'The Adobe Connect / Moodle integration.',
      author: 'Remote-Learner',
      authorUrl: 'https://github.com/remotelearner'
    },

    {
      name: 'OU blog',
      projectUrl: 'https://github.com/moodleou/moodle-mod_oublog',
      tags: ['moodle', 'blog'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-mod_oublog',
      description: 'This is an alternative blog that you can install into standard Moodle.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'OU wiki',
      projectUrl: 'https://github.com/moodleou/moodle-mod_ouwiki',
      tags: ['moodle', 'wiki'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-mod_ouwiki',
      description: 'This is an alternative wiki that you can install into standard Moodle.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'ForumNG',
      projectUrl: 'https://github.com/moodleou/moodle-mod_forumng',
      tags: ['moodle', 'forum'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-mod_forumng',
      description: 'This is an alternative forum that you can install into standard Moodle.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Subpage',
      projectUrl: 'https://github.com/moodleou/moodle-mod_subpage',
      tags: ['moodle', 'subpage'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-mod_subpage',
      description: 'This subpage module allows users to create, manage, and view lists of Moodle activities separately from the main course page',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'OU search',
      projectUrl: 'https://github.com/moodleou/moodle-local_ousearch',
      tags: ['moodle', 'search'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-local_ousearch',
      description: 'This is a cross-database indexed text-search facility.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'News block',
      projectUrl: 'https://github.com/moodleou/moodle-block_news',
      tags: ['moodle', 'news'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-block_news',
      description: 'This is a news block that you can install into standard Moodle.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Course rate block',
      projectUrl: 'https://docs.moodle.org/32/en/Course_rate_block',
      tags: ['moodle', 'rating'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-block_rate_course',
      description: 'The block contains a link to a separate form page to give a rating, and displays the current aggregate of all user ratings including the number of people who have made ratings.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Edit dates report',
      projectUrl: 'https://github.com/moodleou/moodle-report_editdates',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-report_editdates',
      description: 'This \'report\' is actually a tool that lets you edit all the dates for all the activities in your course on a single page.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'moodle dataplus',
      projectUrl: 'https://github.com/moodleou/moodle-mod_dataplus',
      tags: ['moodle', 'sqlite'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-mod_dataplus',
      description: 'An alternative database module that stores data for each instance in a standalone SQLite3 database.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Ad-hoc database queries',
      projectUrl: 'https://github.com/moodleou/moodle-report_customsql',
      tags: ['moodle', 'sql', 'report'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-report_customsql',
      description: 'This report plugin allows Administrators to set up arbitrary database queries to act as ad-hoc reports.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Edit groups report',
      projectUrl: 'https://github.com/moodleou/moodle-report_editgroups',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-report_editgroups',
      description: 'This \'report\' is actually a tool that lets you edit all the groups settings for all the activities in your course on a single page.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Pattern match question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_pmatch',
      tags: ['moodle', 'pattern match', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_pmatch',
      description: 'Pattern-match question type for Moodle',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Pattern match with JME editor question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_pmatchjme',
      tags: ['moodle', 'pattern match', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_pmatchjme',
      description: 'Moodle pmatch question type with jme molecular editor',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Edit ID numbers report',
      projectUrl: 'https://github.com/moodleou/moodle-report_editidnumber',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-report_editidnumber',
      description: 'This \'report\' is actually a tool that lets you edit all the ID numbers for all the activities and grade items in your course on a single page.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Variable Numeric Set Question Type With Units',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_varnumunit',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_varnumunit',
      description: 'Moodle variable numeric sets question type with units.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'The manual grading by student quiz report',
      projectUrl: 'https://github.com/moodleou/moodle-quiz_gradingstudents',
      tags: ['moodle', 'grading'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-quiz_gradingstudents',
      description: 'A quiz \'report\' add-on for Moodle, like the nomal manual grading report, but which lets you grade one student at a time, rather than one question at a time.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'The Edit quiz settings quiz report',
      projectUrl: 'https://github.com/moodleou/moodle-quiz_editquizsettings',
      tags: ['moodle', 'quiz'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-quiz_editquizsettings',
      description: 'This \'report\' is actually a tool which lets users edit certain settings, currenty the open and close dates, for a quiz, without needing to give them permission to edit all the other quiz settings.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'The Honesty check quiz access rule',
      projectUrl: 'https://github.com/moodleou/moodle-quizaccess_honestycheck',
      tags: ['moodle', 'quiz'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-quizaccess_honestycheck',
      description: 'A Moodle quiz access plugin that asks the student to promise not to cheat.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Variable Numeric Question Type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_varnumeric',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_varnumeric',
      description: 'A new question type for Moodle - for numeric questions with variable and expression evaluation',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'The Opaque question type and behaviour',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_opaque',
      tags: ['moodle', 'question type', 'opaque'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_opaque',
      description: 'The Opaque question type for Moodle. Allows Moodle to use any other question engine via a web-service link.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'The OU Multi-response question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_oumultiresponse',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_oumultiresponse',
      description: 'A multiple-choice, multiple response question type for Moodle, with particular scoring rules.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Edit roles by capability tool',
      projectUrl: 'https://github.com/moodleou/moodle-tool_editrolesbycap',
      tags: ['moodle', 'permissions'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-tool_editrolesbycap',
      description: 'A Moodle admin tool to edit the permissions for one capability in all roles on one screen.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Combined question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_combined',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_combined',
      description: 'A Moodle question type which allows questions to be built up from parts that are other simpler question types.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Variable Numeric Sets question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_varnumericset',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_varnumericset',
      description: 'Question type for Moodle - for numeric questions with variable and expression evaluation.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Drag-and-drop markers question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_ddmarker',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_ddmarker',
      description: 'question type for Moodle - drag and drop markers with text label onto an image background',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Gap-select question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_gapselect',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_gapselect',
      description: 'This question type allows students to complete a paragraph of text by selecting the missing words using drop-down menus.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'A drag-and-drop question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_ddimageortext',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_ddimageortext',
      description: 'A new question type for Moodle - drag and drop images and / or text drag items onto an image background',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Drag-and-drop, words to sentences question type',
      projectUrl: 'https://github.com/moodleou/moodle-qtype_ddwtos',
      tags: ['moodle', 'question type'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qtype_ddwtos',
      description: 'The Drag-and-drop, words-to-sentences question type for Moodle.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'The Opaque question type and behaviour',
      projectUrl: 'https://github.com/moodleou/moodle-qbehaviour_opaque',
      tags: ['moodle', 'question type', 'opaque'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-qbehaviour_opaque',
      description: 'The Opaque question behaviour.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Superscript/subscript editor',
      projectUrl: 'https://github.com/moodleou/moodle-editor_supsub',
      tags: ['moodle', 'tinymce'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-editor_supsub',
      description: 'This is a very cut-down configuration of TinyMCE that just lets users edit one line of input with superscripts and subscripts, for use in Moodle.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'moodle dualpane',
      projectUrl: 'https://github.com/moodleou/moodle-mod_dualpane',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-mod_dualpane',
      description: 'Module that divides the screen into two panes. One shows a set of instructions, the other can be used to view web pages from the instructions.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'moodle block recommender',
      projectUrl: 'https://github.com/moodleou/moodle-block_recommender',
      tags: ['moodle', 'recommendation'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodleou/moodle-block_recommender',
      description: 'This block offers three different recommendation services: popular activities on this course, popular courses on this site, shared bookmarks.',
      author: 'Open University Moodle plugins',
      authorUrl: 'https://github.com/moodleou'
    },

    {
      name: 'Kuali Research',
      projectUrl: 'https://kuali.org/portfolio/research/',
      tags: ['research', 'grant', 'grant administration', 'funding'],
      platform: PLATFORM.JAVA,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/kuali/kc',
      description: 'Kuali Research (KC) for Research Administration is a comprehensive system to manage the complexities of research administration needs from the faculty researcher through grants administration to federal funding agencies.',
      author: 'Kuali',
      authorUrl: 'http://www.kuali.org/'
    },

    {
      name: 'canvas sis integration php',
      projectUrl: 'https://github.com/umhbwebservices/canvas-sis-integration-php',
      tags: ['canvas', 'sis', 'student information system'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/umhbwebservices/canvas-sis-integration-php',
      description: 'Integrate your SIS data with Canvas',
      author: 'University of Mary Hardin-Baylor Web Services',
      authorUrl: 'https://github.com/umhbwebservices'
    },

    {
      name: 'canvas ara custom report php',
      projectUrl: 'https://github.com/umhbwebservices/canvas-ara-custom-report-php',
      tags: ['canvas', 'email', 'report', 'samba'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/umhbwebservices/canvas-ara-custom-report-php',
      description: 'This is a simple script that will allow you to send a weekly email of participations for users in online courses.',
      author: 'University of Mary Hardin-Baylor Web Services',
      authorUrl: 'https://github.com/umhbwebservices'
    },

    {
      name: 'E-Newsletter Platform for Educational Institutions',
      projectUrl: 'https://github.com/unl/UNL_ENews',
      tags: ['newsletter'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/unl/UNL_ENews',
      description: 'A micro-news management platform for funneling news and building electronic newsletters.',
      author: 'University of Nebraska-Lincoln',
      authorUrl: 'https://github.com/unl'
    },

    {
      name: 'UNLchat',
      projectUrl: 'https://github.com/unl/VisitorChat',
      tags: ['chat'],
      platform: PLATFORM.PHP,
      license: LICENSE.BSD3CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/unl/VisitorChat',
      description: 'A custom live chat solution built for UNL. It is designed to be work for a large organization with many sub-organizations such as a university.',
      author: 'University of Nebraska-Lincoln',
      authorUrl: 'https://github.com/unl'
    },

    {
      name: 'MediaHub',
      projectUrl: 'https://github.com/unl/UNL_MediaHub',
      tags: ['media', 'aggregator'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/unl/UNL_MediaHub',
      description: 'A video/audio aggregator for educational institutions.',
      author: 'University of Nebraska-Lincoln',
      authorUrl: 'https://github.com/unl'
    },

    {
      name: 'E-resource access checker',
      projectUrl: 'https://github.com/UNC-Libraries/Ebook-Access-Checker',
      tags: ['e-resource', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/Ebook-Access-Checker',
      description: 'A simple JRuby script to check for full-text access to e-resource titles.',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'HathiTrust Print Holdings',
      projectUrl: 'https://github.com/UNC-Libraries/HathiTrust-Print-Holdings',
      tags: ['hathitrust', 'library', 'oracle', 'report', 'millennium', 'iii millennium'],
      platform: PLATFORM.PERL,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/HathiTrust-Print-Holdings',
      description: 'Produce print holdings reports in format required by HathiTrust by querying III Millennium Oracle database',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'E-collections discovery evaluation: catalog data',
      projectUrl: 'https://github.com/UNC-Libraries/Syndetics-Catalog-Coverage-Assessment',
      tags: ['catalog', 'library', 'collections'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/Syndetics-Catalog-Coverage-Assessment',
      description: 'This suite of scripts is used to gather data on the discoverability (in our main online catalog) of individual titles within collections.',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'millennium global update commands',
      projectUrl: 'https://github.com/UNC-Libraries/millennium-global-update-commands',
      tags: ['millennium', 'iii millennium'],
      platform: PLATFORM.UNKNOWN,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/millennium-global-update-commands',
      description: 'Reusable global update routines for III Millennium.',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'OmekaOembedImportPlugin',
      projectUrl: 'https://github.com/UNC-Libraries/OmekaOembedImportPlugin',
      tags: ['omeka', 'oembed', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/OmekaOembedImportPlugin',
      description: 'Uses the Omebed protocol to pull remote images into your Omeka project as regular Omeka items.',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'Citation Builder',
      projectUrl: 'https://github.com/UNC-Libraries/citationbuilder',
      tags: ['citation', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/citationbuilder',
      description: 'An application that generates citations from user entered form data.',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'Millennium Payment Information Processor',
      projectUrl: 'https://github.com/UNC-Libraries/Millennium-Helpers',
      tags: ['millennium', 'iii millennium', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UNC-Libraries/Millennium-Helpers',
      description: 'A helper for working with payment data exported from III Millennium.',
      author: 'The University of North Carolina at Chapel Hill Libraries',
      authorUrl: 'https://github.com/UNC-Libraries'
    },

    {
      name: 'IRIS',
      projectUrl: 'https://github.com/ndlib/annex-ims',
      tags: ['storage', 'inventory'],
      platform: PLATFORM.RUBY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/annex-ims',
      description: 'Integrated Retrieval and Inventory System for offsite storage facilities',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Honeycomb',
      projectUrl: 'https://github.com/ndlib/honeycomb',
      tags: ['collections', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/annex-ims',
      description: 'Provides basic collection and item administration, as well as serialization of your collections so they can be used by external applications.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Beehive',
      projectUrl: 'https://github.com/ndlib/beehive',
      tags: ['collections', 'library', 'exhibit'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/beehive',
      description: 'Provides an attractive frontend display for the collections and exhibits created and managed by Honeycomb.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Disadis',
      projectUrl: 'https://github.com/ndlib/disadis',
      tags: ['hydra', 'library', 'fedora', 'fedora commons'],
      platform: PLATFORM.GO,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/disadis',
      description: 'Disadis is an download proxy for Hydra-based applications.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'noids',
      projectUrl: 'https://github.com/ndlib/noids',
      tags: ['noid', 'library', 'identifier', 'collections'],
      platform: PLATFORM.GO,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/noids',
      description: 'Implements a server to provide a NOID service.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Ex Libris Primo JavaScript Files',
      projectUrl: 'https://github.com/ndlib/primo-javascript',
      tags: ['ex libris', 'primo', 'library'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/primo-javascript',
      description: 'This is a collection of miscellaneous JavaScript files to enhance the Primo 4 user experience.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Hydramata::Works',
      projectUrl: 'https://github.com/ndlib/hydramata-works',
      tags: ['hydra', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/hydramata-works',
      description: 'Provide a well defined data-structure to ease the interaction between differing layers of a Hydra application.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Hydramaton',
      projectUrl: 'https://github.com/ndlib/hydramaton',
      tags: ['hydra', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/hydramaton',
      description: 'This Rails application is to be the container for integrating and fleshing-out Hydramata components.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'Hydra::ObjectViewer',
      projectUrl: 'https://github.com/ndlib/hydra-object_viewer',
      tags: ['hydra', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/hydra-object_viewer',
      description: 'A mountable Rails engine used for displaying objects.',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'hydra registry',
      projectUrl: 'https://github.com/ndlib/hydra-registry',
      tags: ['hydra', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ndlib/hydra-registry',
      description: 'An end point for reporting Hydra Project Usage',
      author: 'Hesburgh Libraries of Notre Dame',
      authorUrl: 'https://github.com/ndlib'
    },

    {
      name: 'vufind',
      projectUrl: 'https://vufind.org/vufind/',
      tags: ['library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/vufind-org/vufind',
      description: 'A library resource discovery portal designed and developed for libraries by libraries',
      author: 'vufind.org',
      authorUrl: 'https://github.com/vufind-org'
    },

    {
      name: 'pdf to chronam',
      projectUrl: 'https://github.com/uoregon-libraries/pdf-to-chronam',
      tags: ['newspaper', 'bagit', 'chronam', 'library'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/uoregon-libraries/pdf-to-chronam',
      description: 'Various scripts for converting born-digital PDF newspapers, as well as scanned newspapers, into a one-batch bag, which can then be directly ingested into chronam (or a fork thereof)',
      author: 'University of Oregon Libraries',
      authorUrl: 'https://github.com/uoregon-libraries'
    },

    {
      name: 'alma offline circulation tool',
      projectUrl: 'https://github.com/uoregon-libraries/alma-offline-circulation-tool',
      tags: ['alma', 'ex libris', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.CC0,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/uoregon-libraries/alma-offline-circulation-tool',
      description: 'Replacement offline circulation tool for Ex Libris\'s Alma offline circ tool',
      author: 'University of Oregon Libraries',
      authorUrl: 'https://github.com/uoregon-libraries'
    },

    {
      name: 'dms',
      projectUrl: 'https://github.com/uthsc/dms',
      tags: ['digital signage'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/uthsc/dms',
      description: 'digital media signage',
      author: 'University of Tennessee Health Science Center',
      authorUrl: 'https://github.com/uthsc'
    },

    {
      name: 'wp-bigdipper',
      projectUrl: 'https://github.com/TheLibratory/wp-bigdipper',
      tags: ['wordpress', 'library', 'theme'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/TheLibratory/wp-bigdipper',
      description: 'A new, more responsive, editable and stable Wordpress theme for library blogs',
      author: 'Technology Integration Services',
      authorUrl: 'https://github.com/TheLibratory'
    },

    {
      name: 'Avalon Media System',
      projectUrl: 'https://github.com/avalonmediasystem/avalon',
      tags: ['hydra', 'collections', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/avalonmediasystem/avalon',
      description: 'An open source system for managing large collections of digital audio and video.',
      author: 'Avalon Media System',
      authorUrl: 'https://github.com/avalonmediasystem'
    },

    {
      name: 'ATKreporting',
      projectUrl: 'https://github.com/yalemssa/ATKreporting',
      tags: ['archivists toolkit', 'library'],
      platform: PLATFORM.SQL,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yalemssa/ATKreporting',
      description: 'A bunch of SQL queries and functions to check the integrity of our data in Archivists\' Toolkit',
      author: 'Manuscripts and Archives, Yale University Library',
      authorUrl: 'https://github.com/yalemssa'
    },

    {
      name: 'php at lookup',
      projectUrl: 'https://github.com/yalemssa/php-at-lookup',
      tags: ['archivists toolkit', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.ECL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yalemssa/php-at-lookup',
      description: 'PHP code to query and retrieve data from an Archivists\' Toolkit database',
      author: 'Manuscripts and Archives, Yale University Library',
      authorUrl: 'https://github.com/yalemssa'
    },

    {
      name: 'AT plugin Yale custom tasks',
      projectUrl: 'https://github.com/yalemssa/AT-plugin-Yale-custom-tasks',
      tags: ['archivists toolkit', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yalemssa/AT-plugin-Yale-custom-tasks',
      description: 'Plugin to add custom tasks to the Archivists Toolkit to make container processing more efficient',
      author: 'Manuscripts and Archives, Yale University Library',
      authorUrl: 'https://github.com/yalemssa'
    },

    {
      name: 'ATKBarcodeSheetGen',
      projectUrl: 'https://github.com/yalemssa/ATKBarcodeSheetGen',
      tags: ['archivists toolkit', 'barcode4j', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yalemssa/ATKBarcodeSheetGen',
      description: 'A utility to generate barcode sheets from the Archivsts\' Toolkit using Barcode4J',
      author: 'Manuscripts and Archives, Yale University Library',
      authorUrl: 'https://github.com/yalemssa'
    },

    {
      name: 'AeonATK',
      projectUrl: 'https://github.com/yalemssa/AeonATK',
      tags: ['archivists toolkit', 'aeon', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yalemssa/AeonATK',
      description: 'A Grails-based interface for Aeon and the Archivists\' Toolkit',
      author: 'Manuscripts and Archives, Yale University Library',
      authorUrl: 'https://github.com/yalemssa'
    },

    {
      name: 'pc access',
      projectUrl: 'https://github.com/yorkulibraries/pc-access',
      tags: ['computer lab'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulibraries/pc-access',
      description: 'Simple Ruby on Rails app to detect which computers are available.',
      author: 'York University Libraries',
      authorUrl: 'https://github.com/yorkulibraries'
    },

    {
      name: 'dspace deposit tools',
      projectUrl: 'https://github.com/yorkulibraries/dspace-deposit-tools',
      tags: ['dspace', 'marc', 'marcxml', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulibraries/dspace-deposit-tools',
      description: 'dspace deposit tools',
      author: 'York University Libraries',
      authorUrl: 'https://github.com/yorkulibraries'
    },

    {
      name: 'dspace simple archive packager',
      projectUrl: 'https://github.com/yorkulibraries/dspace-simple-archive-packager',
      tags: ['dspace', 'archive', 'library'],
      platform: PLATFORM.SHELL,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulibraries/dspace-simple-archive-packager',
      description: 'The function of this script is to do the create Dspace Simple Archives in order to do batch uploading.',
      author: 'York University Libraries',
      authorUrl: 'https://github.com/yorkulibraries'
    },

    {
      name: 'Islandora Transcript',
      projectUrl: 'https://github.com/yorkulibraries/islandora_transcript',
      tags: ['islandora', 'library'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulibraries/islandora_transcript',
      description: 'Allows for viewing the TRANSCRIPT datastream of an object, if it exists, in a tab.',
      author: 'York University Libraries',
      authorUrl: 'https://github.com/yorkulibraries'
    },

    {
      name: 'ojs aggregate stats',
      projectUrl: 'https://github.com/yorkulibraries/ojs-aggregate-stats',
      tags: ['ojs', 'library'],
      platform: PLATFORM.SHELL,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulibraries/ojs-aggregate-stats',
      description: 'A collection of various helper scripts we use to interact with OJS.',
      author: 'York University Libraries',
      authorUrl: 'https://github.com/yorkulibraries'
    },

    {
      name: 'Dspacescripts',
      projectUrl: 'https://github.com/yorkulibraries/dspacescripts',
      tags: ['dspace', 'library'],
      platform: PLATFORM.JAVA,
      license: LICENSE.CUSTOM,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulibraries/dspacescripts',
      description: 'The random assortment of DSpace scripts we have for doing stuff with DSpace.',
      author: 'York University Libraries',
      authorUrl: 'https://github.com/yorkulibraries'
    },

    {
      name: 'Concerto 2 Digital Signage System',
      projectUrl: 'http://www.concerto-signage.org/',
      tags: ['digital signage'],
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/concerto/concerto',
      description: 'Concerto is an open source digital signage system.',
      author: 'Concerto Digital Signage',
      authorUrl: 'https://github.com/concerto'
    },

    {
      name: 'Papyrus',
      projectUrl: 'https://github.com/yorkulcs/papyrus',
      tags: ['library', 'acccessibility', 'a11y'],
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/yorkulcs/papyrus',
      description: 'An accessible content delivery and student management application.',
      author: 'York University Library Computing Services',
      authorUrl: 'https://github.com/yorkulcs'
    },

    {
      name: 'ComPAIR',
      projectUrl: 'https://github.com/ubc/compair',
      tags: ['assessment'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/compair',
      description: 'This application is based on an updated 2012 paper which details Adaptive Comparative Judgement\'s method and history. Students answer questions asked by instructors or other students and are then able to compare and judge the given answers. From these comparisons, a score for each answer is calculated according to ACJ\'s methods.',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'UBC Peer Instruction Tool for edX',
      projectUrl: 'https://github.com/ubc/ubcpi',
      tags: ['xblock', 'edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/ubcpi',
      description: 'Peer Instruction XBlock',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Response Map',
      projectUrl: 'https://github.com/ubc/response-map',
      tags: ['question', 'map', 'lti'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/response-map',
      description: 'The response map is an LTI tool that allows students to respond to a question or give feedback and have the responses show up on a world map based on the location that they enter in.',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'iPeer',
      projectUrl: 'http://ipeer.ctlt.ubc.ca/',
      tags: ['evaluation', 'peer evaluation'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/iPeer',
      description: 'Peer Evaluation System',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Metadata Editor Building Block',
      projectUrl: 'https://github.com/ubc/metadata-editor-b2',
      tags: ['blackboard'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/metadata-editor-b2',
      description: 'Bulk changing metadata for Blackboard Learn 9.1',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Basic LTI Building Block with Enhanced Features',
      projectUrl: 'https://github.com/ubc/enhanced-basiclti-b2',
      tags: ['blackboard', 'lti'],
      platform: PLATFORM.JAVA,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/enhanced-basiclti-b2',
      description: 'The Basic LTI Building Block with enhanced features',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'GroupBuilder',
      projectUrl: 'https://github.com/ubc/GroupBuilder',
      tags: ['blackboard'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/GroupBuilder',
      description: 'Group building block for Blackboard Learn 9',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'lti parser',
      projectUrl: 'https://github.com/ubc/lti-parser',
      tags: ['lti'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/lti-parser',
      description: 'A library for parsing Learning Tools Interoperability (LTI) messages',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'puppet learninglocker',
      projectUrl: 'https://github.com/ubc/puppet-learninglocker',
      tags: ['puppet', 'learning locker'],
      platform: PLATFORM.PUPPET,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/puppet-learninglocker',
      description: 'Learning Locker puppet module',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Building Block Template for Blackboard Learn',
      projectUrl: 'https://github.com/ubc/b2-template',
      tags: ['blackboard'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/b2-template',
      description: 'This template helps developers to set up the building block development environment.',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Utility Class for Blackboard Building Block',
      projectUrl: 'https://github.com/ubc/blackboard-b2-util',
      tags: ['blackboard'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/blackboard-b2-util',
      description: 'This tool provides easier interaction with Blackboard APIs.',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Blackboard Learn Assessment to Webwork Converter',
      projectUrl: 'https://github.com/ubc/Blackboard-Learn-Assessment-to-Webwork-Converter',
      tags: ['blackboard', 'webwork'],
      platform: PLATFORM.JAVA,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/Blackboard-Learn-Assessment-to-Webwork-Converter',
      description: 'Convert exported Blackboard Learn Assessments to Webwork PG problems',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'WeBWorKCal',
      projectUrl: 'https://github.com/ubc/webworkcal',
      tags: ['webwork'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ubc/webworkcal',
      description: 'A simple script to grab the future assignments and due dates to put them on to Google calendar for WeBWorK.',
      author: 'The University of British Columbia',
      authorUrl: 'https://github.com/ubc'
    },

    {
      name: 'Optimus Ingestor',
      projectUrl: 'https://github.com/UQ-UQx/optimus_ingestor',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/optimus_ingestor',
      description: 'Ingests data from the edX data package into usable database stored structres',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'lti base php',
      projectUrl: 'https://github.com/UQ-UQx/lti_base_php',
      tags: ['lti'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/lti_base_php',
      description: 'A base package for LTI tools',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'videouploader',
      projectUrl: 'https://github.com/UQ-UQx/video_uploader',
      tags: ['edx', 'lti'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/video_uploader',
      description: 'This module allows students to upload a single video into a predefined folder.',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'teams101x diydiagnosis',
      projectUrl: 'https://github.com/UQ-UQx/teams101x_diydiagnosis',
      tags: ['edx', 'teams101x'],
      platform: PLATFORM.HTML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/teams101x_diydiagnosis',
      description: 'A self-help tool for use in teams101x for a learner to narrow down the causes of problems they are facing with their teams, and finding appropriate course content through "jump_to_id" links.',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'edX RAW HTML boiler plate',
      projectUrl: 'https://github.com/UQ-UQx/edx_raw_html_boilerplate',
      tags: ['edx'],
      platform: PLATFORM.HTML,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/edx_raw_html_boilerplate',
      description: 'Use this tool to develop small interactive html, css, js apps for RAW HTML xblocks in edX',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'drag and drop words',
      projectUrl: 'https://github.com/UQ-UQx/drag_and_drop_words',
      tags: ['edx', 'lts', 'ieltsx'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/drag_and_drop_words',
      description: 'Drag and drop activity developed for use in IELTSx',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'IELTSx reading practice test pages',
      projectUrl: 'https://github.com/UQ-UQx/IELTSx_reading_practice_test_pages',
      tags: ['edx', 'lts', 'ieltsx'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/IELTSx_reading_practice_test_pages',
      description: 'Reading practice test pages used in IELTSx',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'IELTSx writing practice test',
      projectUrl: 'https://github.com/UQ-UQx/IELTSx_writing_practice_test',
      tags: ['edx', 'lts', 'ieltsx'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/IELTSx_writing_practice_test',
      description: 'Writing practice test used in IELTSx',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'IELTSx reading practice test',
      projectUrl: 'https://github.com/UQ-UQx/IELTSx_reading_practice_test',
      tags: ['edx', 'lts', 'ieltsx'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/IELTSx_reading_practice_test',
      description: 'Reading practice test used in IELTSx',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'IELTSx listening practice test',
      projectUrl: 'https://github.com/UQ-UQx/IELTSx_listening_practice_test',
      tags: ['edx', 'lts', 'ieltsx'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/IELTSx_listening_practice_test',
      description: 'Listening practice test used in IELTSx',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'Audio Recorder',
      projectUrl: 'https://github.com/UQ-UQx/audio_recorder',
      tags: ['edx', 'lts', 'ieltsx'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/audio_recorder',
      description: 'Audio recorder desiged for and implimented in IELTSx MOOC on the edX platform.',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'teams101x peer compatibilities conflicts',
      projectUrl: 'https://github.com/UQ-UQx/teams101x_peer_compatibilities_conflicts',
      tags: ['edx', 'teams101x'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/teams101x_peer_compatibilities_conflicts',
      description: 'Teams101x compatibilities and potential clashes activity',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'Teams101x Generate PDF Tool',
      projectUrl: 'https://github.com/UQ-UQx/teams101x_generate_pdf',
      tags: ['edx', 'teams101x'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/teams101x_generate_pdf',
      description: 'PDF generator tool of user answers a questionnaire regading their personal traits and team preference roles.',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'teams101x team conflict survey',
      projectUrl: 'https://github.com/UQ-UQx/teams101x_team_conflict_survey',
      tags: ['edx', 'teams101x'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/teams101x_team_conflict_survey',
      description: 'Teams101x Team Conflict Survey {{Activity}}',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'teams101x tuckman questionnaire',
      projectUrl: 'https://github.com/UQ-UQx/teams101x_tuckman_questionnaire',
      tags: ['edx', 'teams101x'],
      platform: PLATFORM.PHP,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/teams101x_tuckman_questionnaire',
      description: 'Tuckman Questionnare for teams101x',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'WebRecorder',
      projectUrl: 'https://github.com/UQ-UQx/WebRecorder',
      tags: ['edx'],
      platform: PLATFORM.OBJECTIVEC,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/WebRecorder',
      description: 'iOS web recorder for edX audio recording',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'xygrapher',
      projectUrl: 'https://github.com/UQ-UQx/xygrapher',
      tags: ['edx'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UQ-UQx/xygrapher',
      description: 'This module allows students to enter a X/Y Value and see their value graphed along with the other learners in the cohourt.',
      author: 'UQx',
      authorUrl: 'https://github.com/UQ-UQx'
    },

    {
      name: 'WeBWork',
      projectUrl: 'http://webwork.maa.org/wiki/Main_Page',
      tags: ['webwork'],
      platform: PLATFORM.PERL,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/openwebwork/webwork',
      description: 'Open Source Online Homework System',
      author: 'WeBWorK',
      authorUrl: 'https://github.com/openwebwork'
    },

    {
      name: 'Learning Locker',
      projectUrl: 'https://learninglocker.net/',
      tags: ['learning record store', 'xapi'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/LearningLocker/learninglocker',
      description: 'An open source Learning Record Store (LRS) implementing the xAPI (Tin Can API).',
      author: 'Learning Locker',
      authorUrl: 'https://github.com/LearningLocker'
    },

    {
      name: 'uMobile Android App',
      projectUrl: 'https://github.com/Oakland-University/uMobile-Android-App',
      tags: ['uportal', 'mobile', 'android'],
      platform: PLATFORM.JAVA,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Oakland-University/uMobile-Android-App',
      description: 'uMobile is the mobilization of uPortal',
      author: 'Oakland University',
      authorUrl: 'https://github.com/Oakland-University'
    },

    {
      name: 'uMobile iOS App',
      projectUrl: 'https://github.com/Oakland-University/uMobile-iOS-app',
      tags: ['uportal', 'mobile', 'ios'],
      platform: PLATFORM.OBJECTIVEC,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Oakland-University/uMobile-iOS-app',
      description: 'uMobile is the mobilization of uPortal',
      author: 'Oakland University',
      authorUrl: 'https://github.com/Oakland-University'
    },

    {
      name: 'uPortal Tester Webapp',
      projectUrl: 'https://github.com/Oakland-University/uPortal-Tester',
      tags: ['uportal', 'testing'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Oakland-University/uPortal-Tester',
      description: 'This app can test if uPortal is responding normally.',
      author: 'Oakland University',
      authorUrl: 'https://github.com/Oakland-University'
    },

    {
      name: 'Custom Course Menu Block',
      projectUrl: 'https://github.com/UniversityofPortland/moodle-block_custom_course_menu',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UniversityofPortland/moodle-block_custom_course_menu',
      description: 'A block to display enrolled course in a configurable manner for both students and teachers.',
      author: 'University of Portland',
      authorUrl: 'https://github.com/UniversityofPortland'
    },

    {
      name: 'Mahara Assignment Submission Plugin',
      projectUrl: 'https://github.com/UniversityofPortland/moodle-assign_mahara',
      tags: ['moodle', 'mahara', 'xml-rpc'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UniversityofPortland/moodle-assign_mahara',
      description: 'An updated Mahara assignment submission plugin.',
      author: 'University of Portland',
      authorUrl: 'https://github.com/UniversityofPortland'
    },

    {
      name: 'Mahara Local Plugin',
      projectUrl: 'https://github.com/UniversityofPortland/moodle-local_mahara',
      tags: ['moodle', 'mahara', 'xml-rpc'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UniversityofPortland/moodle-local_mahara',
      description: 'Allows your Moodle installation to subscribe to Mahara XML-RPC endpoints.',
      author: 'University of Portland',
      authorUrl: 'https://github.com/UniversityofPortland'
    },

    {
      name: 'LTI Proxy',
      projectUrl: 'https://uw-madison-doit.github.io/lti-proxy/',
      tags: ['lti'],
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/UW-Madison-DoIT/lti-proxy',
      description: 'A configurable service to sign LTI parameters are return form data for your application',
      author: 'University of Wisconsin - Madison - DoIT',
      authorUrl: 'https://github.com/UW-Madison-DoIT'
    },

    {
      name: 'OJS EZID Plugin',
      projectUrl: 'https://github.com/VTUL/EzidDOI',
      tags: ['ojs', 'ezid', 'library', 'doi'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/VTUL/EzidDOI',
      description: 'A plugin for assigning and registering DOIs with EZID for OJS articles and issues.',
      author: 'Virginia Polytechnic Institute and State University Libraries',
      authorUrl: 'https://github.com/VTUL'
    },

    {
      name: 'Sufia Development Environment',
      projectUrl: 'https://github.com/VTUL/sufia-install',
      tags: ['sufia', 'hydra', 'library', 'repository'],
      platform: PLATFORM.SHELL,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/VTUL/sufia-install',
      description: 'This Vagrant environment enables a developer to install and run a Sufia application either locally, via VirtualBox, or to bring up an Amazon Web Services (AWS) server instead.',
      author: 'Virginia Polytechnic Institute and State University Libraries',
      authorUrl: 'https://github.com/VTUL'
    },

    {
      name: 'DSpace Links',
      projectUrl: 'https://github.com/VTUL/dspace-links',
      tags: ['dspace', 'library', 'identifier', 'oai-pmh'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/VTUL/dspace-links',
      description: 'This is a simple service for converting a DSpace collection\'s OAI-PMH identifiers into HTML links.',
      author: 'Virginia Polytechnic Institute and State University Libraries',
      authorUrl: 'https://github.com/VTUL'
    },

    {
      name: 'Problem Builder and Step Builder',
      projectUrl: 'https://github.com/open-craft/problem-builder',
      tags: ['edx', 'xblock', 'question type'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/problem-builder',
      description: 'Both blocks allow to create questions of various types. They can be used to simulate the workflow of real-life mentoring, within an edX course.',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'xblock vectordraw',
      projectUrl: 'https://github.com/open-craft/xblock-vectordraw',
      tags: ['edx', 'xblock', 'question type'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/xblock-vectordraw',
      description: 'An XBlock for creating vector drawing exercises',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'Dalite NG',
      projectUrl: 'https://github.com/open-craft/dalite-ng',
      tags: ['edx', 'lti', 'django'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/dalite-ng',
      description: 'Dalite NG is a Peer Instruction Tool for online learning platforms such as Open edX. It is implemented in Django as an LTI tool and should be compatible with most online learning platforms.',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'LTI Tool Provider',
      projectUrl: 'https://github.com/open-craft/django-lti-tool-provider',
      tags: ['lti', 'django'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/django-lti-tool-provider',
      description: 'This is an implementation of IMS LTI Tool Provider in a from of pluggable Django application',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'xblock field test',
      projectUrl: 'https://github.com/open-craft/xblock-field-test',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/xblock-field-test',
      description: 'XBlock for testing field scopes',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'Grammarian XBlock',
      projectUrl: 'https://github.com/open-craft/xblock-grammarian',
      tags: ['edx', 'xblock', 'question type'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/xblock-grammarian',
      description: 'Grammarian is an XBlock that displays a sentence and asks the learner to click on the part of the sentence that is incorrect.',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'xblock dalite',
      projectUrl: 'https://github.com/open-craft/xblock-dalite',
      tags: ['edx', 'xblock'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/xblock-dalite',
      description: 'XBlock for Dalite-NG',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'Forum Leaderboard XBlock',
      projectUrl: 'https://github.com/open-craft/xblock-leaderboard',
      tags: ['edx', 'xblock', 'forum'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/xblock-leaderboard',
      description: 'An XBlock for displaying the top voted threads in an inline discussion.',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'ActiveTable XBlock',
      projectUrl: 'https://github.com/open-craft/xblock-activetable',
      tags: ['edx', 'xblock', 'question type'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/xblock-activetable',
      description: 'An XBlock that implements a tabular problem type. Students are requested to fill in some of the table cells.',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'edX Analytics Devstack',
      projectUrl: 'https://github.com/open-craft/edx-analytics-devstack',
      tags: ['edx', 'analytics'],
      platform: PLATFORM.SHELL,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/edx-analytics-devstack',
      description: 'This is a basic devstack setup for hacking on edX analytics.',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'Dalite',
      projectUrl: 'https://github.com/open-craft/edu8-dalite',
      tags: ['edx'],
      platform: PLATFORM.PHP,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/open-craft/edu8-dalite',
      description: 'Dalite is a peer instruction assignment web application',
      author: 'OpenCraft',
      authorUrl: 'https://github.com/open-craft'
    },

    {
      name: 'BU edX External Grader Framework',
      projectUrl: 'https://github.com/bu-ist/bux-grader-framework',
      tags: ['edx', 'grading'],
      platform: PLATFORM.PYTHON,
      license: LICENSE.AGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/bu-ist/bux-grader-framework',
      description: 'A simple framework for creating specialized external graders for your edX course.',
      author: 'Boston University Information Services and Technology',
      authorUrl: 'https://github.com/bu-ist'
    },

    {
      name: 'digibib',
      projectUrl: 'https://github.com/KelvinSmithLibrary/digibib',
      tags: ['bibliography', 'library'],
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/KelvinSmithLibrary/digibib',
      description: 'A digital bibliography of digital projects.',
      author: 'Case Western Reserve University Kelvin Smith Library',
      authorUrl: 'https://github.com/KelvinSmithLibrary'
    },

    {
      name: 'TRACK4K',
      projectUrl: 'http://track4k.co.za/',
      tags: ['lecture', 'recording'],
      platform: PLATFORM.CPP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://track4k.co.za/downloads.html',
      description: 'An open-source, automated, lecture recording system that tracks the presenter in 4K video streams',
      author: 'TRACK4K',
      authorUrl: 'http://track4k.co.za/'
    },

    {
      name: 'EduSec',
      projectUrl: 'https://github.com/EduSec/EduSec',
      tags: ['erp', 'enterprise resource planning'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/EduSec/EduSec',
      description: 'College Management System',
      author: 'EduSec',
      authorUrl: 'https://github.com/EduSec'
    },

    {
      name: 'Moodle Module for EQUELLA Integration',
      projectUrl: 'https://github.com/equella/moodle-mod_equella',
      tags: ['moodle', 'equella', 'repository'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/equella/moodle-mod_equella',
      description: 'Moodle module for integration with EQUELLA',
      author: 'Equella',
      authorUrl: 'https://github.com/equella'
    },

    {
      name: 'FenixEdu Academic',
      projectUrl: 'http://fenixedu.org/',
      tags: ['sis', 'student information system'],
      platform: PLATFORM.JAVA,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/FenixEdu/fenixedu-academic',
      description: 'An open source Student Information System',
      author: 'FenixEdu',
      authorUrl: 'https://github.com/FenixEdu'
    },

    {
      name: 'FenixEdu Learning',
      projectUrl: 'http://fenixedu.org/',
      tags: ['lms', 'learning management system'],
      platform: PLATFORM.JAVA,
      license: LICENSE.LGPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/FenixEdu/fenixedu-learning',
      description: 'An open source Learning Management System',
      author: 'FenixEdu',
      authorUrl: 'https://github.com/FenixEdu'
    },

    {
      name: 'SViz',
      projectUrl: 'http://fenixedu.org/sviz/',
      tags: ['data visualization', 'd3'],
      platform: PLATFORM.JAVASCRIPT,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/FenixEdu/sviz',
      description: 'A d3-based library of visualizations to display aggregated data about student related information',
      author: 'FenixEdu',
      authorUrl: 'https://github.com/FenixEdu'
    },

    {
      name: 'Moodle Theme Tester',
      projectUrl: 'https://docs.moodle.org/29/en/Theme_Tester_tool',
      tags: ['moodle', 'theme', 'bootstrap'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-tool_themetester',
      description: 'A Moodle Theme Testing tool, with a focus on Bootstrap 3 based themes.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'Collaborate',
      projectUrl: 'https://docs.moodle.org/dev/Collaborate',
      tags: ['moodle', 'blackboard', 'collaborate'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-mod_collaborate',
      description: 'A module for integration with Blackboard Collaborate.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'Snap',
      projectUrl: 'https://github.com/moodlerooms/moodle-theme_snap',
      tags: ['moodle', 'theme'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-theme_snap',
      description: 'A Moodle theme that makes online learning an enjoyable and intuitive experience for learners and educators',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'Flexpage',
      projectUrl: 'https://docs.moodle.org/dev/Flexpage',
      tags: ['moodle', 'course format'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-theme_flexpage',
      description: 'A course format that provides a teacher with complete control of how educational materials and assessments are presented to a student.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'redislock',
      projectUrl: 'https://github.com/moodlerooms/moodle-local_redislock',
      tags: ['moodle', 'redis'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-local_redislock',
      description: 'Provides a Moodle lock factory class for locking with Redis.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'Checklist',
      projectUrl: 'https://github.com/moodlerooms/moodle-gradingform_checklist',
      tags: ['moodle', 'grading'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-gradingform_checklist',
      description: 'The Checklist advanced grading method is an easy way for the user and teacher to view a list of criteria and the associated grade value for each criteria.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'Folder View',
      projectUrl: 'https://docs.moodle.org/dev/Folder_View',
      tags: ['moodle', 'course format'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-format_folderview',
      description: 'The Folder View course format displays activities and resources within a folder that is expandable or collapsible.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'HTTPS Search and replace',
      projectUrl: 'https://docs.moodle.org/30/en/HTTPS_Search_and_replace',
      tags: ['moodle'],
      platform: PLATFORM.PHP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-tool_httpsreplace',
      description: 'When turning on https security for a site, embedded content using http urls may stop working. This 3rd party tool allows you to locate and upgrade those links by searching the content in the database and changing it in one go.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'moodle plugin ci',
      projectUrl: 'https://github.com/moodlerooms/moodle-plugin-ci',
      tags: ['moodle', 'travis', 'testing'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodlerooms/moodle-plugin-ci',
      description: 'The goal of this project is to facilitate the running of tests and code analysis tools against a Moodle plugin in Travis CI.',
      author: 'Moodlerooms, Inc.',
      authorUrl: 'https://github.com/moodlerooms'
    },

    {
      name: 'Islandora',
      projectUrl: 'http://islandora.ca/',
      tags: ['islandora', 'repository', 'drupal', 'fedora'],
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/Islandora/islandora',
      description: 'A Drupal module for browsing and managing Fedora-based digital repositories',
      author: 'Islandora',
      authorUrl: 'https://github.com/Islandora'
    }
];

/*

{
  name: '',
  projectUrl: '',
  tags: [''],
  platform: PLATFORM.,
  license: LICENSE.,
  sourceHost: SOURCEHOST.,
  sourceUrl: '',
  description: '',
  author: '',
  authorUrl: ''
},
*/
