import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUserReports() {
  const userData =       [
    {
      id: 1,
      user_id: 68,
      bike_id: 142,
      start_datetime: '2024-07-12T14:30:00Z',
      end_datetime: '2024-07-13T14:30:00Z',
      lor_code: '053007',
      gps: 'Latitude: 52.520008, Longitude: 13.404954',
      description: 'Locked my bike outside the grocery store and when I came out, it had been stolen.'
    },
    {
      id: 2,
      user_id: 49,
      bike_id: 175,
      start_datetime: '2024-11-12T14:30:00Z',
      end_datetime: '2024-11-19T14:30:00Z',
      lor_code: '081003',
      gps: 'Latitude: 52.516275, Longitude: 13.377704',
      description: 'Left my bike chained to a post overnight and discovered it missing the next day.'
    },
    {
      id: 3,
      user_id: 63,
      bike_id: 102,
      start_datetime: '2023-08-14T14:30:00Z',
      end_datetime: '2023-08-20T14:30:00Z',
      lor_code: '045009',
      gps: 'Latitude: 52.523405, Longitude: 13.411400',
      description: 'Parked my bike at the train station and returned to find it had been stolen.'
    },
    {
      id: 4,
      user_id: 53,
      bike_id: 143,
      start_datetime: '2023-01-15T14:30:00Z',
      end_datetime: '2023-01-21T14:30:00Z',
      lor_code: '044008',
      gps: 'Latitude: 52.507541, Longitude: 13.390319',
      description: 'Secured my bike in the bike rack at work, only to find it gone at the end of the day.'
    },
    {
      id: 5,
      user_id: 6,
      bike_id: 120,
      start_datetime: '2024-12-15T14:30:00Z',
      end_datetime: '2024-12-18T14:30:00Z',
      lor_code: '045011',
      gps: 'Latitude: 52.530643, Longitude: 13.385567',
      description: 'Rode my bike to the park for a picnic and returned to find it stolen.'
    },
    {
      id: 6,
      user_id: 67,
      bike_id: 34,
      start_datetime: '2023-05-24T14:30:00Z',
      end_datetime: '2023-05-25T14:30:00Z',
      lor_code: '061002',
      gps: 'Latitude: 52.496891, Longitude: 13.431947',
      description: 'Locked my bike outside the gym and it was stolen while I was working out.'
    },
    {
      id: 7,
      user_id: 4,
      bike_id: 132,
      start_datetime: '2023-10-21T14:30:00Z',
      end_datetime: '2023-10-24T14:30:00Z',
      lor_code: '022002',
      gps: 'Latitude: 52.514523, Longitude: 13.350814',
      description: 'Left my bike in the apartment building courtyard and it disappeared overnight.'
    },
    {
      id: 8,
      user_id: 1,
      bike_id: 142,
      start_datetime: '2024-04-09T14:30:00Z',
      end_datetime: '2024-04-10T14:30:00Z',
      lor_code: '043006',
      gps: 'Latitude: 52.537041, Longitude: 13.395587',
      description: 'Parked my bike outside the cinema and it was stolen during the movie.'
    },
    {
      id: 9,
      user_id: 81,
      bike_id: 165,
      start_datetime: '2023-08-25T14:30:00Z',
      end_datetime: '2023-08-29T14:30:00Z',
      lor_code: '036013',
      gps: 'Latitude: 52.503484, Longitude: 13.332336',
      description: 'Chained my bike to a fence while visiting a friend and it was stolen.'
    },
    {
      id: 10,
      user_id: 88,
      bike_id: 85,
      start_datetime: '2023-05-25T14:30:00Z',
      end_datetime: '2023-06-01T14:30:00Z',
      lor_code: '076015',
      gps: 'Latitude: 52.524370, Longitude: 13.369016',
      description: 'Locked my bike outside the museum and it was gone when I came out.'
    },
    {
      id: 11,
      user_id: 102,
      bike_id: 75,
      start_datetime: '2023-09-09T14:30:00Z',
      end_datetime: '2023-09-15T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.511547, Longitude: 13.454464',
      description: 'Secured my bike in the bike storage room of my apartment building and it was stolen.'
    },
    {
      id: 12,
      user_id: 80,
      bike_id: 105,
      start_datetime: '2023-10-06T14:30:00Z',
      end_datetime: '2023-10-10T14:30:00Z',
      lor_code: '033004',
      gps: 'Latitude: 52.540932, Longitude: 13.384725',
      description: 'Rode my bike to a café for coffee and it was stolen while I was inside.'
    },
    {
      id: 13,
      user_id: 9,
      bike_id: 149,
      start_datetime: '2023-06-24T14:30:00Z',
      end_datetime: '2023-06-27T14:30:00Z',
      lor_code: '052005',
      gps: 'Latitude: 52.498620, Longitude: 13.349609',
      description: 'Left my bike in the backyard overnight and it was stolen by morning.'
    },
    {
      id: 14,
      user_id: 78,
      bike_id: 67,
      start_datetime: '2023-10-27T14:30:00Z',
      end_datetime: '2023-11-01T14:30:00Z',
      lor_code: '054009',
      gps: 'Latitude: 52.532389, Longitude: 13.418331',
      description: 'Parked my bike outside the library and it was stolen while I was studying.'
    },
    {
      id: 15,
      user_id: 96,
      bike_id: 48,
      start_datetime: '2023-01-12T14:30:00Z',
      end_datetime: '2023-01-19T14:30:00Z',
      lor_code: '072004',
      gps: 'Latitude: 52.505893, Longitude: 13.369216',
      description: 'Chained my bike to a tree in the park and it was stolen while I was walking around.'
    },
    {
      id: 16,
      user_id: 95,
      bike_id: 104,
      start_datetime: '2024-10-02T14:30:00Z',
      end_datetime: '2024-10-06T14:30:00Z',
      lor_code: '062004',
      gps: 'Latitude: 52.518754, Longitude: 13.375944',
      description: 'Locked my bike outside the office building and it was stolen during the workday.'
    },
    {
      id: 17,
      user_id: 13,
      bike_id: 173,
      start_datetime: '2024-01-10T14:30:00Z',
      end_datetime: '2024-01-11T14:30:00Z',
      lor_code: '061002',
      gps: 'Latitude: 52.527919, Longitude: 13.402413',
      description: 'Secured my bike in the underground parking garage and it was stolen.'
    },
    {
      id: 18,
      user_id: 18,
      bike_id: 161,
      start_datetime: '2023-10-17T14:30:00Z',
      end_datetime: '2023-10-22T14:30:00Z',
      lor_code: '062003',
      gps: 'Latitude: 52.494857, Longitude: 13.345648',
      description: 'Rode my bike to the market and it was stolen while I was shopping.'
    },
    {
      id: 19,
      user_id: 33,
      bike_id: 122,
      start_datetime: '2023-11-27T14:30:00Z',
      end_datetime: '2023-12-01T14:30:00Z',
      lor_code: '042002',
      gps: 'Latitude: 52.535985, Longitude: 13.394635',
      description: 'Left my bike in the hallway of my apartment building and it was stolen.'
    },
    {
      id: 20,
      user_id: 17,
      bike_id: 148,
      start_datetime: '2023-10-22T14:30:00Z',
      end_datetime: '2023-10-24T14:30:00Z',
      lor_code: '045010',
      gps: 'Latitude: 52.509663, Longitude: 13.375144',
      description: 'Parked my bike outside the restaurant and it was stolen during dinner.'
    },
    {
      id: 21,
      user_id: 39,
      bike_id: 86,
      start_datetime: '2024-11-28T14:30:00Z',
      end_datetime: '2024-11-30T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.522206, Longitude: 13.409537',
      description: 'Chained my bike to a railing at the beach and it was stolen while I was swimming.'
    },
    {
      id: 22,
      user_id: 95,
      bike_id: 53,
      start_datetime: '2023-07-18T14:30:00Z',
      end_datetime: '2023-07-21T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.514732, Longitude: 13.348978',
      description: 'Locked my bike outside the concert venue and it was stolen during the show.'
    },
    {
      id: 23,
      user_id: 41,
      bike_id: 101,
      start_datetime: '2024-09-07T14:30:00Z',
      end_datetime: '2024-09-10T14:30:00Z',
      lor_code: '012005',
      gps: 'Latitude: 52.539366, Longitude: 13.392053',
      description: 'Secured my bike in the backyard shed and it was stolen.'
    },
    {
      id: 24,
      user_id: 100,
      bike_id: 108,
      start_datetime: '2023-10-13T14:30:00Z',
      end_datetime: '2023-10-14T14:30:00Z',
      lor_code: '076012',
      gps: 'Latitude: 52.501234, Longitude: 13.328998',
      description: 'Rode my bike to the sports field and it was stolen while I was playing.'
    },
    {
      id: 25,
      user_id: 37,
      bike_id: 138,
      start_datetime: '2024-03-03T14:30:00Z',
      end_datetime: '2024-03-05T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.526084, Longitude: 13.366547',
      description: 'Left my bike in the garage overnight and it was stolen.'
    },
    {
      id: 26,
      user_id: 24,
      bike_id: 99,
      start_datetime: '2024-03-17T14:30:00Z',
      end_datetime: '2024-03-23T14:30:00Z',
      lor_code: '032003',
      gps: 'Latitude: 52.513019, Longitude: 13.452393',
      description: 'Parked my bike outside the café and it was stolen while I was chatting with friends.'
    },
    {
      id: 27,
      user_id: 45,
      bike_id: 18,
      start_datetime: '2024-08-26T14:30:00Z',
      end_datetime: '2024-09-01T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.538726, Longitude: 13.382255',
      description: 'Chained my bike to a signpost and it was stolen overnight.'
    },
    {
      id: 28,
      user_id: 46,
      bike_id: 2,
      start_datetime: '2023-12-16T14:30:00Z',
      end_datetime: '2023-12-23T14:30:00Z',
      lor_code: '023003',
      gps: 'Latitude: 52.496045, Longitude: 13.346984',
      description: 'Locked my bike outside the office building and it was stolen before I left work.'
    },
    {
      id: 29,
      user_id: 5,
      bike_id: 94,
      start_datetime: '2024-06-14T14:30:00Z',
      end_datetime: '2024-06-21T14:30:00Z',
      lor_code: '036012',
      gps: 'Latitude: 52.530186, Longitude: 13.415732',
      description: 'Secured my bike in the bike cage at the train station and it was stolen.'
    },
    {
      id: 30,
      user_id: 25,
      bike_id: 89,
      start_datetime: '2024-05-27T14:30:00Z',
      end_datetime: '2024-05-28T14:30:00Z',
      lor_code: '022002',
      gps: 'Latitude: 52.503982, Longitude: 13.366485',
      description: 'Rode my bike to the park for a picnic and it was stolen while I was relaxing.'
    },
    {
      id: 31,
      user_id: 54,
      bike_id: 128,
      start_datetime: '2023-10-11T14:30:00Z',
      end_datetime: '2023-10-12T14:30:00Z',
      lor_code: '036011',
      gps: 'Latitude: 52.517389, Longitude: 13.373019',
      description: 'Locked my bike outside the grocery store and when I came out, it had been stolen.'
    },
    {
      id: 32,
      user_id: 1,
      bike_id: 75,
      start_datetime: '2024-02-01T14:30:00Z',
      end_datetime: '2024-02-04T14:30:00Z',
      lor_code: '045011',
      gps: 'Latitude: 52.525751, Longitude: 13.399276',
      description: 'Left my bike chained to a post overnight and discovered it missing the next day.'
    },
    {
      id: 33,
      user_id: 21,
      bike_id: 3,
      start_datetime: '2024-11-26T14:30:00Z',
      end_datetime: '2024-12-02T14:30:00Z',
      lor_code: '022002',
      gps: 'Latitude: 52.492768, Longitude: 13.341728',
      description: 'Parked my bike at the train station and returned to find it had been stolen.'
    },
    {
      id: 34,
      user_id: 102,
      bike_id: 2,
      start_datetime: '2024-10-09T14:30:00Z',
      end_datetime: '2024-10-16T14:30:00Z',
      lor_code: '014010',
      gps: 'Latitude: 52.534331, Longitude: 13.391022',
      description: 'Secured my bike in the bike rack at work, only to find it gone at the end of the day.'
    },
    {
      id: 35,
      user_id: 50,
      bike_id: 16,
      start_datetime: '2024-04-21T14:30:00Z',
      end_datetime: '2024-04-25T14:30:00Z',
      lor_code: '081002',
      gps: 'Latitude: 52.507112, Longitude: 13.372229',
      description: 'Rode my bike to the park for a picnic and returned to find it stolen.'
    },
    {
      id: 36,
      user_id: 76,
      bike_id: 82,
      start_datetime: '2023-06-25T14:30:00Z',
      end_datetime: '2023-06-29T14:30:00Z',
      lor_code: '063006',
      gps: 'Latitude: 52.520938, Longitude: 13.407759',
      description: 'Locked my bike outside the gym and it was stolen while I was working out.'
    },
    {
      id: 37,
      user_id: 19,
      bike_id: 110,
      start_datetime: '2023-05-14T14:30:00Z',
      end_datetime: '2023-05-16T14:30:00Z',
      lor_code: '033005',
      gps: 'Latitude: 52.512938, Longitude: 13.347682',
      description: 'Left my bike in the apartment building courtyard and it disappeared overnight.'
    },
    {
      id: 38,
      user_id: 6,
      bike_id: 148,
      start_datetime: '2024-05-20T14:30:00Z',
      end_datetime: '2024-05-26T14:30:00Z',
      lor_code: '045011',
      gps: 'Latitude: 52.537411, Longitude: 13.389012',
      description: 'Parked my bike outside the cinema and it was stolen during the movie.'
    },
    {
      id: 39,
      user_id: 77,
      bike_id: 134,
      start_datetime: '2023-05-15T14:30:00Z',
      end_datetime: '2023-05-16T14:30:00Z',
      lor_code: '063006',
      gps: 'Latitude: 52.499478, Longitude: 13.327361',
      description: 'Chained my bike to a fence while visiting a friend and it was stolen.'
    },
    {
      id: 40,
      user_id: 40,
      bike_id: 116,
      start_datetime: '2023-03-17T14:30:00Z',
      end_datetime: '2023-03-19T14:30:00Z',
      lor_code: '033004',
      gps: 'Latitude: 52.523952, Longitude: 13.364768',
      description: 'Locked my bike outside the museum and it was gone when I came out.'
    },
    {
      id: 41,
      user_id: 16,
      bike_id: 63,
      start_datetime: '2024-12-09T14:30:00Z',
      end_datetime: '2024-12-16T14:30:00Z',
      lor_code: '081004',
      gps: 'Latitude: 52.510831, Longitude: 13.450019',
      description: 'Secured my bike in the bike storage room of my apartment building and it was stolen.'
    },
    {
      id: 42,
      user_id: 65,
      bike_id: 88,
      start_datetime: '2023-10-11T14:30:00Z',
      end_datetime: '2023-10-18T14:30:00Z',
      lor_code: '035010',
      gps: 'Latitude: 52.541821, Longitude: 13.380732',
      description: 'Rode my bike to a café for coffee and it was stolen while I was inside.'
    },
    {
      id: 43,
      user_id: 56,
      bike_id: 72,
      start_datetime: '2023-03-19T14:30:00Z',
      end_datetime: '2023-03-23T14:30:00Z',
      lor_code: '071001',
      gps: 'Latitude: 52.497270, Longitude: 13.344319',
      description: 'Left my bike in the backyard overnight and it was stolen by morning.'
    },
    {
      id: 44,
      user_id: 10,
      bike_id: 169,
      start_datetime: '2024-09-15T14:30:00Z',
      end_datetime: '2024-09-21T14:30:00Z',
      lor_code: '034006',
      gps: 'Latitude: 52.531233, Longitude: 13.413128',
      description: 'Parked my bike outside the library and it was stolen while I was studying.'
    },
    {
      id: 45,
      user_id: 82,
      bike_id: 163,
      start_datetime: '2024-08-14T14:30:00Z',
      end_datetime: '2024-08-16T14:30:00Z',
      lor_code: '045011',
      gps: 'Latitude: 52.506274, Longitude: 13.363741',
      description: 'Chained my bike to a tree in the park and it was stolen while I was walking around.'
    },
    {
      id: 46,
      user_id: 20,
      bike_id: 131,
      start_datetime: '2023-10-22T14:30:00Z',
      end_datetime: '2023-10-29T14:30:00Z',
      lor_code: '036013',
      gps: 'Latitude: 52.519523, Longitude: 13.371394',
      description: 'Locked my bike outside the office building and it was stolen during the workday.'
    },
    {
      id: 47,
      user_id: 9,
      bike_id: 170,
      start_datetime: '2024-07-16T14:30:00Z',
      end_datetime: '2024-07-18T14:30:00Z',
      lor_code: '036014',
      gps: 'Latitude: 52.528919, Longitude: 13.399813',
      description: 'Secured my bike in the underground parking garage and it was stolen.'
    },
    {
      id: 48,
      user_id: 33,
      bike_id: 82,
      start_datetime: '2023-10-11T14:30:00Z',
      end_datetime: '2023-10-17T14:30:00Z',
      lor_code: '042002',
      gps: 'Latitude: 52.495857, Longitude: 13.342648',
      description: 'Rode my bike to the market and it was stolen while I was shopping.'
    },
    {
      id: 49,
      user_id: 93,
      bike_id: 116,
      start_datetime: '2023-12-25T14:30:00Z',
      end_datetime: '2023-12-30T14:30:00Z',
      lor_code: '043004',
      gps: 'Latitude: 52.536985, Longitude: 13.393635',
      description: 'Left my bike in the hallway of my apartment building and it was stolen.'
    },
    {
      id: 50,
      user_id: 33,
      bike_id: 3,
      start_datetime: '2024-06-05T14:30:00Z',
      end_datetime: '2024-06-12T14:30:00Z',
      lor_code: '072004',
      gps: 'Latitude: 52.508663, Longitude: 13.374144',
      description: 'Parked my bike outside the restaurant and it was stolen during dinner.'
    },
    {
      id: 51,
      user_id: 3,
      bike_id: 137,
      start_datetime: '2024-04-23T14:30:00Z',
      end_datetime: '2024-04-28T14:30:00Z',
      lor_code: '043006',
      gps: 'Latitude: 52.524206, Longitude: 13.408537',
      description: 'Chained my bike to a railing at the beach and it was stolen while I was swimming.'
    },
    {
      id: 52,
      user_id: 101,
      bike_id: 84,
      start_datetime: '2023-06-05T14:30:00Z',
      end_datetime: '2023-06-11T14:30:00Z',
      lor_code: '034008',
      gps: 'Latitude: 52.515732, Longitude: 13.346978',
      description: 'Locked my bike outside the concert venue and it was stolen during the show.'
    },
    {
      id: 53,
      user_id: 88,
      bike_id: 98,
      start_datetime: '2024-12-23T14:30:00Z',
      end_datetime: '2024-12-29T14:30:00Z',
      lor_code: '074009',
      gps: 'Latitude: 52.540366, Longitude: 13.391053',
      description: 'Secured my bike in the backyard shed and it was stolen.'
    },
    {
      id: 54,
      user_id: 28,
      bike_id: 57,
      start_datetime: '2024-09-06T14:30:00Z',
      end_datetime: '2024-09-08T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.502234, Longitude: 13.329998',
      description: 'Rode my bike to the sports field and it was stolen while I was playing.'
    },
    {
      id: 55,
      user_id: 67,
      bike_id: 121,
      start_datetime: '2024-09-12T14:30:00Z',
      end_datetime: '2024-09-16T14:30:00Z',
      lor_code: '034006',
      gps: 'Latitude: 52.527084, Longitude: 13.365547',
      description: 'Left my bike in the garage overnight and it was stolen.'
    },
    {
      id: 56,
      user_id: 81,
      bike_id: 61,
      start_datetime: '2024-03-07T14:30:00Z',
      end_datetime: '2024-03-11T14:30:00Z',
      lor_code: '032002',
      gps: 'Latitude: 52.514019, Longitude: 13.451393',
      description: 'Parked my bike outside the café and it was stolen while I was chatting with friends.'
    },
    {
      id: 57,
      user_id: 88,
      bike_id: 170,
      start_datetime: '2024-01-24T14:30:00Z',
      end_datetime: '2024-01-28T14:30:00Z',
      lor_code: '011002',
      gps: 'Latitude: 52.539726, Longitude: 13.381255',
      description: 'Chained my bike to a signpost and it was stolen overnight.'
    },
    {
      id: 58,
      user_id: 21,
      bike_id: 57,
      start_datetime: '2023-11-20T14:30:00Z',
      end_datetime: '2023-11-22T14:30:00Z',
      lor_code: '064007',
      gps: 'Latitude: 52.495045, Longitude: 13.345984',
      description: 'Locked my bike outside the office building and it was stolen before I left work.'
    },
    {
      id: 59,
      user_id: 31,
      bike_id: 169,
      start_datetime: '2023-11-22T14:30:00Z',
      end_datetime: '2023-11-25T14:30:00Z',
      lor_code: '012006',
      gps: 'Latitude: 52.531186, Longitude: 13.414732',
      description: 'Secured my bike in the bike cage at the train station and it was stolen.'
    },
    {
      id: 60,
      user_id: 46,
      bike_id: 59,
      start_datetime: '2024-02-03T14:30:00Z',
      end_datetime: '2024-02-08T14:30:00Z',
      lor_code: '021001',
      gps: 'Latitude: 52.504982, Longitude: 13.365485',
      description: 'Rode my bike to the park for a picnic and it was stolen while I was relaxing.'
    },
    {
      id: 61,
      user_id: 96,
      bike_id: 33,
      start_datetime: '2024-12-14T14:30:00Z',
      end_datetime: '2024-12-15T14:30:00Z',
      lor_code: '081002',
      gps: 'Latitude: 52.518389, Longitude: 13.372019',
      description: 'Locked my bike outside the grocery store and when I came out, it had been stolen.'
    },
    {
      id: 62,
      user_id: 71,
      bike_id: 1,
      start_datetime: '2024-07-01T14:30:00Z',
      end_datetime: '2024-07-06T14:30:00Z',
      lor_code: '075010',
      gps: 'Latitude: 52.526751, Longitude: 13.398276',
      description: 'Left my bike chained to a post overnight and discovered it missing the next day.'
    },
    {
      id: 63,
      user_id: 61,
      bike_id: 21,
      start_datetime: '2023-03-01T14:30:00Z',
      end_datetime: '2023-03-05T14:30:00Z',
      lor_code: '052004',
      gps: 'Latitude: 52.493768, Longitude: 13.340728',
      description: 'Parked my bike at the train station and returned to find it had been stolen.'
    },
    {
      id: 64,
      user_id: 104,
      bike_id: 77,
      start_datetime: '2023-08-01T14:30:00Z',
      end_datetime: '2023-08-04T14:30:00Z',
      lor_code: '012006',
      gps: 'Latitude: 52.535331, Longitude: 13.390022',
      description: 'Secured my bike in the bike rack at work, only to find it gone at the end of the day.'
    },
    {
      id: 65,
      user_id: 32,
      bike_id: 110,
      start_datetime: '2023-03-09T14:30:00Z',
      end_datetime: '2023-03-13T14:30:00Z',
      lor_code: '044008',
      gps: 'Latitude: 52.508112, Longitude: 13.371229',
      description: 'Rode my bike to the park for a picnic and returned to find it stolen.'
    },
    {
      id: 66,
      user_id: 62,
      bike_id: 60,
      start_datetime: '2024-08-02T14:30:00Z',
      end_datetime: '2024-08-05T14:30:00Z',
      lor_code: '062004',
      gps: 'Latitude: 52.521938, Longitude: 13.406759',
      description: 'Locked my bike outside the gym and it was stolen while I was working out.'
    },
    {
      id: 67,
      user_id: 87,
      bike_id: 169,
      start_datetime: '2024-10-16T14:30:00Z',
      end_datetime: '2024-10-23T14:30:00Z',
      lor_code: '042003',
      gps: 'Latitude: 52.513938, Longitude: 13.346682',
      description: 'Left my bike in the apartment building courtyard and it disappeared overnight.'
    },
    {
      id: 68,
      user_id: 16,
      bike_id: 33,
      start_datetime: '2024-02-01T14:30:00Z',
      end_datetime: '2024-02-04T14:30:00Z',
      lor_code: '063005',
      gps: 'Latitude: 52.538411, Longitude: 13.388012',
      description: 'Parked my bike outside the cinema and it was stolen during the movie.'
    },
    {
      id: 69,
      user_id: 8,
      bike_id: 81,
      start_datetime: '2024-08-09T14:30:00Z',
      end_datetime: '2024-08-10T14:30:00Z',
      lor_code: '062003',
      gps: 'Latitude: 52.500478, Longitude: 13.326361',
      description: 'Chained my bike to a fence while visiting a friend and it was stolen.'
    },
    {
      id: 70,
      user_id: 33,
      bike_id: 180,
      start_datetime: '2024-03-16T14:30:00Z',
      end_datetime: '2024-03-18T14:30:00Z',
      lor_code: '034008',
      gps: 'Latitude: 52.524952, Longitude: 13.363768',
      description: 'Locked my bike outside the museum and it was gone when I came out.'
    },
    {
      id: 71,
      user_id: 61,
      bike_id: 160,
      start_datetime: '2023-06-25T14:30:00Z',
      end_datetime: '2023-06-30T14:30:00Z',
      lor_code: '053008',
      gps: 'Latitude: 52.511831, Longitude: 13.449019',
      description: 'Secured my bike in the bike storage room of my apartment building and it was stolen.'
    },
    {
      id: 72,
      user_id: 33,
      bike_id: 47,
      start_datetime: '2024-08-01T14:30:00Z',
      end_datetime: '2024-08-06T14:30:00Z',
      lor_code: '051001',
      gps: 'Latitude: 52.542821, Longitude: 13.379732',
      description: 'Rode my bike to a café for coffee and it was stolen while I was inside.'
    },
    {
      id: 73,
      user_id: 97,
      bike_id: 105,
      start_datetime: '2024-07-11T14:30:00Z',
      end_datetime: '2024-07-15T14:30:00Z',
      lor_code: '012005',
      gps: 'Latitude: 52.498270, Longitude: 13.343319',
      description: 'Left my bike in the backyard overnight and it was stolen by morning.'
    },
    {
      id: 74,
      user_id: 63,
      bike_id: 125,
      start_datetime: '2024-03-10T14:30:00Z',
      end_datetime: '2024-03-14T14:30:00Z',
      lor_code: '062004',
      gps: 'Latitude: 52.532233, Longitude: 13.412128',
      description: 'Parked my bike outside the library and it was stolen while I was studying.'
    },
    {
      id: 75,
      user_id: 5,
      bike_id: 48,
      start_datetime: '2023-03-02T14:30:00Z',
      end_datetime: '2023-03-04T14:30:00Z',
      lor_code: '014010',
      gps: 'Latitude: 52.507274, Longitude: 13.362741',
      description: 'Chained my bike to a tree in the park and it was stolen while I was walking around.'
    },
    {
      id: 76,
      user_id: 31,
      bike_id: 169,
      start_datetime: '2023-04-27T14:30:00Z',
      end_datetime: '2023-04-29T14:30:00Z',
      lor_code: '043006',
      gps: 'Latitude: 52.519523, Longitude: 13.370394',
      description: 'Locked my bike outside the office building and it was stolen during the workday.'
    },
    {
      id: 77,
      user_id: 71,
      bike_id: 57,
      start_datetime: '2024-12-06T14:30:00Z',
      end_datetime: '2024-12-13T14:30:00Z',
      lor_code: '037016',
      gps: 'Latitude: 52.529919, Longitude: 13.398813',
      description: 'Secured my bike in the underground parking garage and it was stolen.'
    },
    {
      id: 78,
      user_id: 38,
      bike_id: 169,
      start_datetime: '2024-02-26T14:30:00Z',
      end_datetime: '2024-03-02T14:30:00Z',
      lor_code: '023004',
      gps: 'Latitude: 52.496857, Longitude: 13.341648',
      description: 'Rode my bike to the market and it was stolen while I was shopping.'
    },
    {
      id: 79,
      user_id: 46,
      bike_id: 90,
      start_datetime: '2023-10-07T14:30:00Z',
      end_datetime: '2023-10-13T14:30:00Z',
      lor_code: '045009',
      gps: 'Latitude: 52.537985, Longitude: 13.392635',
      description: 'Left my bike in the hallway of my apartment building and it was stolen.'
    },
    {
      id: 80,
      user_id: 11,
      bike_id: 152,
      start_datetime: '2023-02-22T14:30:00Z',
      end_datetime: '2023-02-23T14:30:00Z',
      lor_code: '024005',
      gps: 'Latitude: 52.509663, Longitude: 13.373144',
      description: 'Parked my bike outside the restaurant and it was stolen during dinner.'
    },
    {
      id: 81,
      user_id: 64,
      bike_id: 163,
      start_datetime: '2023-03-25T14:30:00Z',
      end_datetime: '2023-04-01T14:30:00Z',
      lor_code: '033004',
      gps: 'Latitude: 52.523206, Longitude: 13.408537',
      description: 'Chained my bike to a railing at the beach and it was stolen while I was swimming.'
    },
    {
      id: 82,
      user_id: 46,
      bike_id: 131,
      start_datetime: '2024-10-14T14:30:00Z',
      end_datetime: '2024-10-18T14:30:00Z',
      lor_code: '036012',
      gps: 'Latitude: 52.514732, Longitude: 13.347978',
      description: 'Locked my bike outside the concert venue and it was stolen during the show.'
    },
    {
      id: 83,
      user_id: 62,
      bike_id: 72,
      start_datetime: '2023-11-11T14:30:00Z',
      end_datetime: '2023-11-14T14:30:00Z',
      lor_code: '014010',
      gps: 'Latitude: 52.539366, Longitude: 13.393053',
      description: 'Secured my bike in the backyard shed and it was stolen.'
    },
    {
      id: 84,
      user_id: 87,
      bike_id: 102,
      start_datetime: '2024-01-21T14:30:00Z',
      end_datetime: '2024-01-28T14:30:00Z',
      lor_code: '012006',
      gps: 'Latitude: 52.501234, Longitude: 13.328998',
      description: 'Rode my bike to the sports field and it was stolen while I was playing.'
    },
    {
      id: 85,
      user_id: 58,
      bike_id: 109,
      start_datetime: '2024-08-08T14:30:00Z',
      end_datetime: '2024-08-14T14:30:00Z',
      lor_code: '043004',
      gps: 'Latitude: 52.526084, Longitude: 13.366547',
      description: 'Left my bike in the garage overnight and it was stolen.'
    },
    {
      id: 86,
      user_id: 67,
      bike_id: 71,
      start_datetime: '2023-02-22T14:30:00Z',
      end_datetime: '2023-03-01T14:30:00Z',
      lor_code: '021001',
      gps: 'Latitude: 52.513019, Longitude: 13.452393',
      description: 'Parked my bike outside the café and it was stolen while I was chatting with friends.'
    },
    {
      id: 87,
      user_id: 22,
      bike_id: 2,
      start_datetime: '2024-02-04T14:30:00Z',
      end_datetime: '2024-02-05T14:30:00Z',
      lor_code: '062004',
      gps: 'Latitude: 52.538726, Longitude: 13.382255',
      description: 'Chained my bike to a signpost and it was stolen overnight.'
    },
    {
      id: 88,
      user_id: 7,
      bike_id: 48,
      start_datetime: '2023-06-22T14:30:00Z',
      end_datetime: '2023-06-23T14:30:00Z',
      lor_code: '051003',
      gps: 'Latitude: 52.496045, Longitude: 13.346984',
      description: 'Locked my bike outside the office building and it was stolen before I left work.'
    },
    {
      id: 89,
      user_id: 90,
      bike_id: 152,
      start_datetime: '2023-10-27T14:30:00Z',
      end_datetime: '2023-10-30T14:30:00Z',
      lor_code: '043004',
      gps: 'Latitude: 52.530186, Longitude: 13.415732',
      description: 'Secured my bike in the bike cage at the train station and it was stolen.'
    },
    {
      id: 90,
      user_id: 25,
      bike_id: 128,
      start_datetime: '2024-10-21T14:30:00Z',
      end_datetime: '2024-10-23T14:30:00Z',
      lor_code: '045010',
      gps: 'Latitude: 52.503982, Longitude: 13.366485',
      description: 'Rode my bike to the park for a picnic and it was stolen while I was relaxing.'
    },
    {
      id: 91,
      user_id: 66,
      bike_id: 4,
      start_datetime: '2023-01-06T14:30:00Z',
      end_datetime: '2023-01-12T14:30:00Z',
      lor_code: '014009',
      gps: 'Latitude: 52.517389, Longitude: 13.373019',
      description: 'Left my bike in the garage overnight and it was stolen.'
    },
    {
      id: 92,
      user_id: 6,
      bike_id: 33,
      start_datetime: '2023-07-07T14:30:00Z',
      end_datetime: '2023-07-10T14:30:00Z',
      lor_code: '045010',
      gps: 'Latitude: 52.525751, Longitude: 13.399276',
      description: 'Parked my bike outside the café and it was stolen while I was chatting with friends.'
    },
    {
      id: 93,
      user_id: 64,
      bike_id: 26,
      start_datetime: '2023-03-01T14:30:00Z',
      end_datetime: '2023-03-07T14:30:00Z',
      lor_code: '043004',
      gps: 'Latitude: 52.492768, Longitude: 13.341728',
      description: 'Chained my bike to a signpost and it was stolen overnight.'
    },
    {
      id: 94,
      user_id: 32,
      bike_id: 31,
      start_datetime: '2024-07-11T14:30:00Z',
      end_datetime: '2024-07-18T14:30:00Z',
      lor_code: '045011',
      gps: 'Latitude: 52.534331, Longitude: 13.391022',
      description: 'Locked my bike outside the office building and it was stolen before I left work.'
    },
    {
      id: 95,
      user_id: 21,
      bike_id: 76,
      start_datetime: '2023-07-02T14:30:00Z',
      end_datetime: '2023-07-04T14:30:00Z',
      lor_code: '064008',
      gps: 'Latitude: 52.507112, Longitude: 13.372229',
      description: 'Secured my bike in the bike cage at the train station and it was stolen.'
    },
    {
      id: 96,
      user_id: 103,
      bike_id: 69,
      start_datetime: '2024-04-09T14:30:00Z',
      end_datetime: '2024-04-13T14:30:00Z',
      lor_code: '024006',
      gps: 'Latitude: 52.520938, Longitude: 13.407759',
      description: 'Rode my bike to the park for a picnic and it was stolen while I was relaxing.'
    },
    {
      id: 97,
      user_id: 45,
      bike_id: 51,
      start_datetime: '2023-07-17T14:30:00Z',
      end_datetime: '2023-07-23T14:30:00Z',
      lor_code: '035009',
      gps: 'Latitude: 52.512938, Longitude: 13.347682',
      description: 'Left my bike in the garage overnight and it was stolen.'
    },
    {
      id: 98,
      user_id: 20,
      bike_id: 81,
      start_datetime: '2023-10-05T14:30:00Z',
      end_datetime: '2023-10-07T14:30:00Z',
      lor_code: '061002',
      gps: 'Latitude: 52.537411, Longitude: 13.389012',
      description: 'Parked my bike outside the café and it was stolen while I was chatting with friends.'
    },
    {
      id: 99,
      user_id: 54,
      bike_id: 105,
      start_datetime: '2024-04-09T14:30:00Z',
      end_datetime: '2024-04-10T14:30:00Z',
      lor_code: '063006',
      gps: 'Latitude: 52.499478, Longitude: 13.327361',
      description: 'Chained my bike to a signpost and it was stolen overnight.'
    },
    {
      id: 100,
      user_id: 7,
      bike_id: 173,
      start_datetime: '2024-05-13T14:30:00Z',
      end_datetime: '2024-05-16T14:30:00Z',
      lor_code: '051003',
      gps: 'Latitude: 52.523952, Longitude: 13.364768',
      description: 'Locked my bike outside the office building and it was stolen before I left work.'
    }
  ]

  for (const data of userData) {
    await prisma.userReport.upsert({
      where: { id: data.id },
      update: {},
      create: data,
    });
  }
}








