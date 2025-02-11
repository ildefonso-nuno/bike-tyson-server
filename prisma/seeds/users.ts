import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function seedUsers() {
  const userData = [
    {
      // id: 1,
      google_id: '1',
      email: 'rodri@gmail.com',
      password: '1234',
      first_name: 'Rodri',
      last_name: 'Müller',
      address: 'Landsberger Allee 366, 12681 Berlin',
      phone_number: '(028) 68818265',
      date_of_birth: '1979-10-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 2,
      google_id: '2',
      email: 'ildefonso.nuno@gmail.com',
      password: '1234',
      first_name: 'Nuno',
      last_name: 'Ildefonso',
      address: 'Friedrichsberger Str. 1, 10243 Berlin',
      phone_number: '(028) 68818265',
      date_of_birth: '1984-10-21T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 3,
      google_id: '3',
      email: 'amirhossein@gmail.com',
      password: '1234',
      first_name: 'Amir Hossein',
      last_name: 'Jamshidi',
      address: 'Clausewitzstraße 2, 10629 Berlin',
      phone_number: '(028) 68818265',
      date_of_birth: '1980-10-07T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 4,
      google_id: '4',
      email: 'dhorlbeck@gmail.com',
      password: '1234',
      first_name: 'Daniel',
      last_name: 'Horlbeck',
      address: 'Wilmersdorfer Str. 20, 10585 Berlin',
      phone_number: '(028) 68818265',
      date_of_birth: '1982-10-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 5,
      google_id: '5',
      email: 'bachmann-dane@aol.com',
      password: '1234',
      first_name: 'Dane',
      last_name: 'Bachmann',
      address: 'Hauptstraße 23, 29654 Pinneberg',
      phone_number: '(028) 68818265',
      date_of_birth: '1961-10-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 6,
      google_id: '6',
      email: 'ella_wolff@yahoo.com',
      password: '1234',
      first_name: 'Ella',
      last_name: 'Wolff',
      address: 'Bahnhofstraße 31, 31271 Schleswig',
      phone_number: '(017) 16051783',
      date_of_birth: '1996-03-05T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 7,
      google_id: '7',
      email: 'michaelisleonard@outlook.de',
      password: '1234',
      first_name: 'Leonard',
      last_name: 'Michaelis',
      address: 'Gartenstraße 100, 73393 Bremerhaven',
      phone_number: '(016) 91368677',
      date_of_birth: '1968-12-08T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 8,
      google_id: '8',
      email: 'hausmann_brock@gmx.de',
      password: '1234',
      first_name: 'Brock',
      last_name: 'Hausmann',
      address: 'Schulstraße 17, 41376 Bayreuth',
      phone_number: '(039364) 246224',
      date_of_birth: '1989-06-15T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 9,
      google_id: '9',
      email: 'm.prinz@outlook.com',
      password: '1234',
      first_name: 'Martena',
      last_name: 'Prinz',
      address: 'Kirchstraße 63, 51571 Berlin',
      phone_number: '(0846) 01436176',
      date_of_birth: '1960-12-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 10,
      google_id: '10',
      email: 'k-jansen8195@icloud.de',
      password: '1234',
      first_name: 'Kaitlin',
      last_name: 'Jansen',
      address: 'Dorfstraße 49, 88148 Herne',
      phone_number: '(0794) 54253870',
      date_of_birth: '1967-04-21T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 11,
      google_id: '11',
      email: 'm-jacobi2905@yahoo.de',
      password: '1234',
      first_name: 'Madeline',
      last_name: 'Jacobi',
      address: 'Bergstraße 45, 38035 Saarbrücken',
      phone_number: '(06867) 2376045',
      date_of_birth: '1982-05-07T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 12,
      google_id: '12',
      email: 'schneider_courtney@gmail.de',
      password: '1234',
      first_name: 'Courtney',
      last_name: 'Schneider',
      address: 'Lindenstraße 71, 49486 Stralsund',
      phone_number: '(07721) 6341683',
      date_of_birth: '1979-12-20T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 13,
      google_id: '13',
      email: 'r_fuchs3807@aol.com',
      password: '1234',
      first_name: 'Rana',
      last_name: 'Fuchs',
      address: 'Bahnhofplatz 1, 41579 Berlin',
      phone_number: '(0125) 84102548',
      date_of_birth: '2002-11-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 14,
      google_id: '14',
      email: 'grn-clio1099@icloud.com',
      password: '1234',
      first_name: 'Clio',
      last_name: 'Grün',
      address: 'Friedhofstraße 26, 5637 Fürth',
      phone_number: '(043) 84384494',
      date_of_birth: '1995-03-20T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 15,
      google_id: '15',
      email: 'c_friedmann@hotmail.de',
      password: '1234',
      first_name: 'Curran',
      last_name: 'Friedmann',
      address: 'Mühlenweg 24, 41423 Schleswig',
      phone_number: '(052) 34547579',
      date_of_birth: '1975-10-15T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 16,
      google_id: '16',
      email: 'aidan.bauer@gmail.de',
      password: '1234',
      first_name: 'Aidan',
      last_name: 'Bauer',
      address: 'Industriestraße 45, 97463 Lebach',
      phone_number: '(034888) 896978',
      date_of_birth: '1978-12-23T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 17,
      google_id: '17',
      email: 'd-elvis1156@gmail.de',
      password: '1234',
      first_name: 'Elvis',
      last_name: 'Diener',
      address: 'Rosenstraße 5, 12366 Worms',
      phone_number: '(01620) 8299666',
      date_of_birth: '1976-09-09T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 18,
      google_id: '18',
      email: 'tucker_bachmann1063@icloud.com',
      password: '1234',
      first_name: 'Tucker',
      last_name: 'Bachmann',
      address: 'Goethestraße 5, 90277 Bremen',
      phone_number: '(0151) 24528643',
      date_of_birth: '2008-03-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 19,
      google_id: '19',
      email: 'braunclaire@yahoo.com',
      password: '1234',
      first_name: 'Claire',
      last_name: 'Braun',
      address: 'Lessingstraße 96, 22455 Delitzsch',
      phone_number: '(01565) 1136167',
      date_of_birth: '1999-04-30T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 20,
      google_id: '20',
      email: 'k-frank3682@aol.com',
      password: '1234',
      first_name: 'Karleigh',
      last_name: 'Frank',
      address: 'Beethovenstraße 19, 79379 Blieskastel',
      phone_number: '(037193) 832904',
      date_of_birth: '1982-02-17T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 21,
      google_id: '21',
      email: 'friedmann.denton@gmail.com',
      password: '1234',
      first_name: 'Denton',
      last_name: 'Friedmann',
      address: 'Mozartstraße 54, 86737 Schwalbach',
      phone_number: '(039776) 458654',
      date_of_birth: '1988-09-16T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 22,
      google_id: '22',
      email: 's_ferdinand@hotmail.de',
      password: '1234',
      first_name: 'Ferdinand',
      last_name: 'Specht',
      address: 'Schillerstraße 3, 77464 Straubing',
      phone_number: '(037322) 945155',
      date_of_birth: '1985-11-23T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 23,
      google_id: '23',
      email: 'm.fuller@aol.com',
      password: '1234',
      first_name: 'Fuller',
      last_name: 'Möller',
      address: 'Blumenstraße 74, 15554 Halberstadt',
      phone_number: '(0771) 06624686',
      date_of_birth: '2006-07-28T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 24,
      google_id: '24',
      email: 'colette.zimmermann@aol.de',
      password: '1234',
      first_name: 'Colette',
      last_name: 'Zimmermann',
      address: 'Kastanienweg 95, 76046 Berlin',
      phone_number: '(088) 78710854',
      date_of_birth: '1986-08-14T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 25,
      google_id: '25',
      email: 'w.boger5215@yahoo.de',
      password: '1234',
      first_name: 'Walker',
      last_name: 'Boger',
      address: 'Birkenweg 50, 18482 Berlin',
      phone_number: '(01766) 7380611',
      date_of_birth: '1995-07-23T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 26,
      google_id: '26',
      email: 'frank-ezra1187@hotmail.de',
      password: '1234',
      first_name: 'Ezra',
      last_name: 'Frank',
      address: 'Ahornweg 70, 33327 Neustadt',
      phone_number: '(0434) 53172534',
      date_of_birth: '2007-11-01T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 27,
      google_id: '27',
      email: 'mller.chelsea@outlook.de',
      password: '1234',
      first_name: 'Chelsea',
      last_name: 'Möller',
      address: 'Tannenweg 13, 96565 Saarbrücken',
      phone_number: '(034254) 299357',
      date_of_birth: '1992-10-01T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 28,
      google_id: '28',
      email: 'lamar_braun4631@gmail.com',
      password: '1234',
      first_name: 'Lamar',
      last_name: 'Braun',
      address: 'Fichtenweg 37, 27094 Hannover',
      phone_number: '(035157) 152043',
      date_of_birth: '2004-03-05T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 29,
      google_id: '29',
      email: 'silasprinz@gmail.com',
      password: '1234',
      first_name: 'Silas',
      last_name: 'Prinz',
      address: 'Eichenweg 33, 41686 Ulm',
      phone_number: '(03314) 7585924',
      date_of_birth: '1964-03-08T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 30,
      google_id: '30',
      email: 'r-pfarrer@yahoo.com',
      password: '1234',
      first_name: 'Rana',
      last_name: 'Pfarrer',
      address: 'Buchenweg 30, 81744 Hamburg',
      phone_number: '(0464) 19961715',
      date_of_birth: '1973-03-04T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 31,
      google_id: '31',
      email: 'martin.tallulah4899@yahoo.com',
      password: '1234',
      first_name: 'Tallulah',
      last_name: 'Martin',
      address: 'Akazienweg 49, 36884 Grimma',
      phone_number: '(0251) 20784579',
      date_of_birth: '1989-06-27T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 32,
      google_id: '32',
      email: 'fbrugger@gmx.com',
      password: '1234',
      first_name: 'Fuller',
      last_name: 'Brugger',
      address: 'Eschenweg 30, 45633 Osnabrück',
      phone_number: '(063) 34766575',
      date_of_birth: '1994-06-11T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 33,
      google_id: '33',
      email: 'dwagner3320@icloud.com',
      password: '1234',
      first_name: 'Demetrius',
      last_name: 'Wagner',
      address: 'Pappelweg 70, 30241 Koblenz',
      phone_number: '(038378) 329373',
      date_of_birth: '2001-05-12T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 34,
      google_id: '34',
      email: 'skitra9679@outlook.com',
      password: '1234',
      first_name: 'Kitra',
      last_name: 'Specht',
      address: 'Ulmenweg 56, 34582 Celle',
      phone_number: '(081) 20727766',
      date_of_birth: '1966-07-04T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 35,
      google_id: '35',
      email: 'boger.camille3718@outlook.de',
      password: '1234',
      first_name: 'Camille',
      last_name: 'Boger',
      address: 'Weidenweg 2, 91162 Berlin',
      phone_number: '(031361) 261366',
      date_of_birth: '1988-03-05T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 36,
      google_id: '36',
      email: 't_hausmann@hotmail.de',
      password: '1234',
      first_name: 'Tyler',
      last_name: 'Hausmann',
      address: 'Kiefernweg 49, 72310 Ribnitz-Damgarten',
      phone_number: '(04714) 0561501',
      date_of_birth: '1977-09-08T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 37,
      google_id: '37',
      email: 'schmidt_carl@yahoo.de',
      password: '1234',
      first_name: 'Carl',
      last_name: 'Schmidt',
      address: 'Erlenweg 51, 24284 Greifswald',
      phone_number: '(021) 01874734',
      date_of_birth: '1982-12-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 38,
      google_id: '38',
      email: 'f.inez@gmail.com',
      password: '1234',
      first_name: 'Inez',
      last_name: 'Frank',
      address: 'Platanenweg 69, 88357 Rodgau',
      phone_number: '(096) 11655475',
      date_of_birth: '1990-12-31T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 39,
      google_id: '39',
      email: 'william.kowalski6692@aol.de',
      password: '1234',
      first_name: 'William',
      last_name: 'Kowalski',
      address: 'Hainbuchenweg 21, 13926 Ulm',
      phone_number: '(0128) 61252056',
      date_of_birth: '1986-08-20T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 40,
      google_id: '40',
      email: 'wfriedmann@yahoo.com',
      password: '1234',
      first_name: 'Wilma',
      last_name: 'Friedmann',
      address: 'Lärchenweg 40, 21568 Plauen',
      phone_number: '(033852) 997618',
      date_of_birth: '1995-09-25T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 41,
      google_id: '41',
      email: 'c.grn7410@gmail.com',
      password: '1234',
      first_name: 'Camilla',
      last_name: 'Grün',
      address: 'Wacholderweg 52, 94472 Bremerhaven',
      phone_number: '(0019) 53473849',
      date_of_birth: '2002-01-29T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 42,
      google_id: '42',
      email: 'c-becker6198@aol.de',
      password: '1234',
      first_name: 'Chancellor',
      last_name: 'Becker',
      address: 'Zedernweg 87, 12251 Göttingen',
      phone_number: '(041) 93162377',
      date_of_birth: '1960-12-04T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 43,
      google_id: '43',
      email: 'bckerserina1542@outlook.com',
      password: '1234',
      first_name: 'Serina',
      last_name: 'Bäcker',
      address: 'Holunderweg 57, 49855 Bremerhaven',
      phone_number: '(032961) 973858',
      date_of_birth: '1983-06-23T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 44,
      google_id: '44',
      email: 'graf_amal8260@outlook.com',
      password: '1234',
      first_name: 'Amal',
      last_name: 'Graf',
      address: 'Fliederweg 100, 65087 Blieskastel',
      phone_number: '(090) 86647130',
      date_of_birth: '2005-07-22T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 45,
      google_id: '45',
      email: 'schrder.fredericka@gmail.com',
      password: '1234',
      first_name: 'Fredericka',
      last_name: 'Schröder',
      address: 'Jasminweg 52, 94674 Bad Homburg v. d. Höhe',
      phone_number: '(039808) 587483',
      date_of_birth: '1992-04-30T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 46,
      google_id: '46',
      email: 'vogel-holmes@icloud.de',
      password: '1234',
      first_name: 'Holmes',
      last_name: 'Vogel',
      address: 'Magnolienweg 49, 71546 Heidenheim',
      phone_number: '(04597) 0372814',
      date_of_birth: '1997-11-05T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 47,
      google_id: '47',
      email: 'bauerhedy5880@yahoo.de',
      password: '1234',
      first_name: 'Hedy',
      last_name: 'Bauer',
      address: 'Rosenweg 92, 22756 Lüneburg',
      phone_number: '(037361) 842177',
      date_of_birth: '1981-06-16T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 48,
      google_id: '48',
      email: 'g.mufutau@hotmail.de',
      password: '1234',
      first_name: 'Mufutau',
      last_name: 'Graf',
      address: 'Tulpenweg 24, 28127 Rostock',
      phone_number: '(033872) 188346',
      date_of_birth: '1969-04-02T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 49,
      google_id: '49',
      email: 'scholz.shana7662@outlook.de',
      password: '1234',
      first_name: 'Shana',
      last_name: 'Scholz',
      address: 'Veilchenweg 20, 12250 Wolfsburg',
      phone_number: '(035741) 323613',
      date_of_birth: '1974-02-15T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 50,
      google_id: '50',
      email: 'g_cheyenne@yahoo.com',
      password: '1234',
      first_name: 'Cheyenne',
      last_name: 'Grün',
      address: 'Narzissenweg 88, 22152 Kiel',
      phone_number: '(07350) 1687672',
      date_of_birth: '1967-06-15T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 51,
      google_id: '51',
      email: 'wintercolby3507@icloud.com',
      password: '1234',
      first_name: 'Colby',
      last_name: 'Winter',
      address: 'Sonnenblumenweg 61, 83718 Trier',
      phone_number: '(033767) 566552',
      date_of_birth: '1967-10-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 52,
      google_id: '52',
      email: 'e.wagner4968@aol.de',
      password: '1234',
      first_name: 'Eugenia',
      last_name: 'Wagner',
      address: 'Dahlienweg 41, 95094 Panketal',
      phone_number: '(0486) 74168266',
      date_of_birth: '1999-03-08T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 53,
      google_id: '53',
      email: 'arthur.frank370@icloud.de',
      password: '1234',
      first_name: 'Arthur',
      last_name: 'Frank',
      address: 'Asternweg 43, 27330 Sulzbach',
      phone_number: '(04708) 6468685',
      date_of_birth: '1998-11-06T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      // id: 54,
      google_id: '54',
      email: 'f.oleg@gmail.de',
      password: '1234',
      first_name: 'Oleg',
      last_name: 'Frank',
      address: 'Lilienweg 68, 21778 Berlin',
      phone_number: '(033783) 070161',
      date_of_birth: '1997-02-02T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '55',
      email: 'jjansen@outlook.com',
      password: '1234',
      first_name: 'Jocelyn',
      last_name: 'Jansen',
      address: 'Nelkenweg 60, 57647 Griesheim',
      phone_number: '(085) 72817213',
      date_of_birth: '1992-12-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '56',
      email: 'd_barbara@yahoo.de',
      password: '1234',
      first_name: 'Barbara',
      last_name: 'Dreher',
      address: 'Orchideenweg 46, 76409 Nordhorn',
      phone_number: '(0216) 73096437',
      date_of_birth: '1986-11-30T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '57',
      email: 'm_becker4227@yahoo.de',
      password: '1234',
      first_name: 'Martin',
      last_name: 'Becker',
      address: 'Primelweg 63, 59345 Saarlouis',
      phone_number: '(065) 54515353',
      date_of_birth: '1968-10-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '58',
      email: 'd_meyer2451@outlook.de',
      password: '1234',
      first_name: 'Darrel',
      last_name: 'Meyer',
      address: 'Hyazinthenweg 56, 37693 Passau',
      phone_number: '(0763) 57249835',
      date_of_birth: '1978-10-11T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '59',
      email: 'vogel-logan7203@gmx.de',
      password: '1234',
      first_name: 'Logan',
      last_name: 'Vogel',
      address: 'Krokusweg 22, 32671 Bergen',
      phone_number: '(0507) 51688275',
      date_of_birth: '1986-08-24T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '60',
      email: 'wolf-kane@icloud.com',
      password: '1234',
      first_name: 'Kane',
      last_name: 'Wolf',
      address: 'Maiglöckchenweg 37, 81310 Solingen',
      phone_number: '(038851) 137192',
      date_of_birth: '2000-01-02T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '61',
      email: 'cain_pfeiffer2440@outlook.de',
      password: '1234',
      first_name: 'Cain',
      last_name: 'Pfeiffer',
      address: 'Schneeglöckchenweg 38, 47441 Aalen',
      phone_number: '(034152) 675867',
      date_of_birth: '1993-07-26T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '62',
      email: 'p_bcker5752@gmx.com',
      password: '1234',
      first_name: 'Piper',
      last_name: 'Bäcker',
      address: 'Löwenzahnweg 36, 54847 Hamburg',
      phone_number: '(058) 51419781',
      date_of_birth: '1995-04-27T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '63',
      email: 's.dolan859@yahoo.com',
      password: '1234',
      first_name: 'Dolan',
      last_name: 'Seidel',
      address: 'Gänseblümchenweg 94, 74168 Krefeld',
      phone_number: '(038484) 002915',
      date_of_birth: '1960-07-08T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '64',
      email: 'friedmann-carter@aol.com',
      password: '1234',
      first_name: 'Carter',
      last_name: 'Friedmann',
      address: 'Mohnweg 75, 54122 Wedel',
      phone_number: '(036) 93834311',
      date_of_birth: '1967-05-24T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '65',
      email: 'kwerner@hotmail.com',
      password: '1234',
      first_name: 'Keaton',
      last_name: 'Werner',
      address: 'Kornblumenweg 78, 65184 Berlin',
      phone_number: '(047) 82094878',
      date_of_birth: '1979-08-14T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '66',
      email: 'perlmannirene@yahoo.com',
      password: '1234',
      first_name: 'Irene',
      last_name: 'Perlmann',
      address: 'Ringelblumenweg 61, 58544 Blankenfelde-Mahlow',
      phone_number: '(031913) 304755',
      date_of_birth: '2005-04-20T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '67',
      email: 'b-mller@aol.com',
      password: '1234',
      first_name: 'Brent',
      last_name: 'Müller',
      address: 'Kamillenweg 72, 63885 Aschaffenburg',
      phone_number: '(086) 19180536',
      date_of_birth: '1969-08-31T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '68',
      email: 'lionel-neumann7270@gmx.de',
      password: '1234',
      first_name: 'Lionel',
      last_name: 'Neumann',
      address: 'Lavendelweg 36, 65653 Böblingen',
      phone_number: '(08152) 7639383',
      date_of_birth: '1994-11-06T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '69',
      email: 'vogtedward1969@hotmail.de',
      password: '1234',
      first_name: 'Edward',
      last_name: 'Vogt',
      address: 'Thymianweg 12, 64265 Hamburg',
      phone_number: '(007) 64480828',
      date_of_birth: '1972-04-02T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '70',
      email: 'bruckmann_cherokee@gmx.de',
      password: '1234',
      first_name: 'Cherokee',
      last_name: 'Bruckmann',
      address: 'Salbeiweg 2, 85863 Schifferstadt',
      phone_number: '(0683) 47254630',
      date_of_birth: '1995-07-28T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '71',
      email: 'd_arden@yahoo.com',
      password: '1234',
      first_name: 'Arden',
      last_name: 'Dreher',
      address: 'Rosmarinweg 40, 71897 Püttlingen',
      phone_number: '(036192) 388712',
      date_of_birth: '1989-01-23T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '72',
      email: 'hedwig-claen6979@gmail.com',
      password: '1234',
      first_name: 'Hedwig',
      last_name: 'Claßen',
      address: 'Basilikumweg 15, 2334 Bremen',
      phone_number: '(037110) 551333',
      date_of_birth: '2001-08-19T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '73',
      email: 'p.gavin9042@aol.de',
      password: '1234',
      first_name: 'Gavin',
      last_name: 'Pfarrer',
      address: 'Petersilienweg 77, 83514 Weißenfels',
      phone_number: '(034417) 336265',
      date_of_birth: '1995-12-24T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '74',
      email: 'k_oren8367@aol.com',
      password: '1234',
      first_name: 'Oren',
      last_name: 'Kaiser',
      address: 'Schnittlauchweg 6, 61732 Ingolstadt',
      phone_number: '(0178) 05488839',
      date_of_birth: '1990-05-15T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '75',
      email: 'grn-gray1504@hotmail.de',
      password: '1234',
      first_name: 'Gray',
      last_name: 'Grün',
      address: 'Dillweg 27, 86239 Berlin',
      phone_number: '(039388) 916888',
      date_of_birth: '1961-07-25T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '76',
      email: 'eaton.hausmann1056@outlook.com',
      password: '1234',
      first_name: 'Eaton',
      last_name: 'Hausmann',
      address: 'Minzeweg 97, 40438 Bremen',
      phone_number: '(058) 64383546',
      date_of_birth: '1995-02-26T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '77',
      email: 'c_winter1453@gmx.de',
      password: '1234',
      first_name: 'Chancellor',
      last_name: 'Winter',
      address: 'Oreganoweg 64, 74153 Hamburg',
      phone_number: '(035) 91238787',
      date_of_birth: '1970-01-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '78',
      email: 'perlmannsamson@aol.com',
      password: '1234',
      first_name: 'Samson',
      last_name: 'Perlmann',
      address: 'Majoranweg 15, 66423 Wittenberg',
      phone_number: '(030355) 927575',
      date_of_birth: '2002-02-27T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '79',
      email: 'hedley_beyer2529@yahoo.com',
      password: '1234',
      first_name: 'Hedley',
      last_name: 'Beyer',
      address: 'Estragonweg 84, 62658 Saarbrücken',
      phone_number: '(083) 19655823',
      date_of_birth: '1960-11-14T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '80',
      email: 'hschulze515@gmail.de',
      password: '1234',
      first_name: 'Hanae',
      last_name: 'Schulze',
      address: 'Fenchelweg 69, 62416 Magdeburg',
      phone_number: '(0233) 43688775',
      date_of_birth: '2004-04-17T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '81',
      email: 'bgloria@icloud.de',
      password: '1234',
      first_name: 'Gloria',
      last_name: 'Böhm',
      address: 'Korianderweg 39, 25444 Anklam',
      phone_number: '(0678) 87159755',
      date_of_birth: '1983-12-26T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '82',
      email: 'dreher_harrison@icloud.com',
      password: '1234',
      first_name: 'Harrison',
      last_name: 'Dreher',
      address: 'Kümmelweg 42, 76975 Cuxhaven',
      phone_number: '(055) 22163673',
      date_of_birth: '1990-10-02T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '83',
      email: 'schumannjacob4478@icloud.com',
      password: '1234',
      first_name: 'Jacob',
      last_name: 'Schumann',
      address: 'Anisweg 5, 51053 Bremen',
      phone_number: '(037136) 147386',
      date_of_birth: '1977-09-12T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '84',
      email: 'd-mller@gmx.de',
      password: '1234',
      first_name: 'Dante',
      last_name: 'Möller',
      address: 'Bärlauchweg 67, 55619 Bexbach',
      phone_number: '(030058) 147364',
      date_of_birth: '1982-08-17T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '85',
      email: 'wenzler-slade@aol.com',
      password: '1234',
      first_name: 'Slade',
      last_name: 'Wenzler',
      address: 'Knoblauchweg 19, 34737 Bergisch Gladbach',
      phone_number: '(0405) 16657789',
      date_of_birth: '1960-07-04T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '86',
      email: 'jena_kaiser7714@outlook.de',
      password: '1234',
      first_name: 'Jena',
      last_name: 'Kaiser',
      address: 'Zwiebelweg 11, 51878 Burg',
      phone_number: '(0342) 44667521',
      date_of_birth: '1965-02-16T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '87',
      email: 'bogerrigel931@hotmail.de',
      password: '1234',
      first_name: 'Rigel',
      last_name: 'Boger',
      address: 'Lauchweg 47, 61127 Nordhorn',
      phone_number: '(0196) 75812683',
      date_of_birth: '1979-06-19T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '88',
      email: 'benedict-vogel@aol.de',
      password: '1234',
      first_name: 'Benedict',
      last_name: 'Vogel',
      address: 'Porreeweg 19, 33191 Neu-Ulm',
      phone_number: '(009) 83937632',
      date_of_birth: '1995-07-02T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '89',
      email: 'karina-obermeyer857@aol.de',
      password: '1234',
      first_name: 'Karina',
      last_name: 'Obermeyer',
      address: 'Sellerieweg 87, 18540 Offenbach am Main',
      phone_number: '(08701) 1208208',
      date_of_birth: '1972-12-19T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '90',
      email: 'alden.jung5771@icloud.de',
      password: '1234',
      first_name: 'Alden',
      last_name: 'Jung',
      address: 'Karottenweg 4, 46543 Maintal',
      phone_number: '(031187) 511584',
      date_of_birth: '1973-06-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '91',
      email: 'hkarlmann@gmail.com',
      password: '1234',
      first_name: 'Harper',
      last_name: 'Karlmann',
      address: 'Rübenweg 18, 42674 Anklam',
      phone_number: '(032583) 355385',
      date_of_birth: '1972-09-04T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '92',
      email: 'p_cole@gmx.de',
      password: '1234',
      first_name: 'Cole',
      last_name: 'Pietsch',
      address: 'Kartoffelweg 43, 65425 Görlitz',
      phone_number: '(0978) 76819551',
      date_of_birth: '1982-08-09T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '93',
      email: 'd-hahn168@outlook.com',
      password: '1234',
      first_name: 'Damian',
      last_name: 'Hahn',
      address: 'Tomatenweg 42, 36682 Schifferstadt',
      phone_number: '(0263) 87763517',
      date_of_birth: '1977-08-12T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '94',
      email: 'schmid.dahlia6930@outlook.com',
      password: '1234',
      first_name: 'Dahlia',
      last_name: 'Schmid',
      address: 'Gurkenweg 40, 53283 Straubing',
      phone_number: '(024) 23194763',
      date_of_birth: '1994-03-07T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '95',
      email: 'k_winter3624@yahoo.de',
      password: '1234',
      first_name: 'Kenyon',
      last_name: 'Winter',
      address: 'Paprikaweg 98, 70665 Munich',
      phone_number: '(026) 58035348',
      date_of_birth: '1972-09-14T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '96',
      email: 'schrder_colby6592@aol.de',
      password: '1234',
      first_name: 'Colby',
      last_name: 'Schröder',
      address: 'Zucchiniweg 85, 48432 Heusweiler',
      phone_number: '(0812) 82413528',
      date_of_birth: '1980-10-19T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '97',
      email: 'schmidtalice1847@icloud.com',
      password: '1234',
      first_name: 'Alice',
      last_name: 'Schmidt',
      address: 'Kürbisweg 18, 89061 Salzgitter',
      phone_number: '(0651) 58841813',
      date_of_birth: '1976-11-10T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '98',
      email: 'bwolff2966@gmail.de',
      password: '1234',
      first_name: 'Buffy',
      last_name: 'Wolff',
      address: 'Melonenweg 37, 19757 Güstrow',
      phone_number: '(0184) 80491710',
      date_of_birth: '1960-11-25T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '99',
      email: 'a_boger9739@yahoo.com',
      password: '1234',
      first_name: 'Allistair',
      last_name: 'Boger',
      address: 'Erdbeerweg 2, 66194 Hamburg',
      phone_number: '(038) 61674813',
      date_of_birth: '1999-12-19T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '100',
      email: 'r.schmitt@aol.de',
      password: '1234',
      first_name: 'Rhona',
      last_name: 'Schmitt',
      address: 'Himbeerweg 79, 84216 Berlin',
      phone_number: '(036851) 804768',
      date_of_birth: '1974-10-18T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '101',
      email: 'k-jacob585@outlook.de',
      password: '1234',
      first_name: 'Jacob',
      last_name: 'Kowalski',
      address: 'Brombeerweg 24, 18638 Berlin',
      phone_number: '(031211) 911567',
      date_of_birth: '1972-12-31T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '102',
      email: 'steven.schubert9775@icloud.de',
      password: '1234',
      first_name: 'Steven',
      last_name: 'Schubert',
      address: 'Johannisbeerweg 64, 55223 Henstedt-Ulzburg',
      phone_number: '(06269) 3544445',
      date_of_birth: '1965-04-14T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '103',
      email: 'krmer_mia@aol.de',
      password: '1234',
      first_name: 'Mia',
      last_name: 'Krämer',
      address: 'Stachelbeerweg 94, 76451 Schwedt',
      phone_number: '(039123) 687342',
      date_of_birth: '1982-11-07T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
    {
      google_id: '104',
      email: 'avrambrugger@aol.de',
      password: '1234',
      first_name: 'Avram',
      last_name: 'Brugger',
      address: 'Holunderweg 17, 12726 Ingelheim',
      phone_number: '(09483) 4381719',
      date_of_birth: '1974-05-06T14:30:00Z',
      profile_pic_url: 'https://example.com/profile_pic_diana.jpg',
    },
  ];

  for (const data of userData) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    await prisma.user.upsert({
      where: { email: data.email },
      update: {},
      create: data,
    });
  }
}
