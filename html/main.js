var vm = new Vue({
    el:'#app',
    data:{
        listBlogs: [{
            "id": 1,
            "first_name": "NguyenAnhDuc",
            "last_name": "Lauret",
            "email": "dlauret0@i2i.jp",
            "gender": "Agender",
            "ip_address": "26.247.214.174"
          }, {
            "id": 2,
            "first_name": "Sherline",
            "last_name": "Eddoes",
            "email": "seddoes1@issuu.com",
            "gender": "Non-binary",
            "ip_address": "144.112.140.158"
          }, {
            "id": 3,
            "first_name": "Myriam",
            "last_name": "Colbertson",
            "email": "mcolbertson2@bluehost.com",
            "gender": "Female",
            "ip_address": "182.165.230.156"
          }, {
            "id": 4,
            "first_name": "Lela",
            "last_name": "Snooks",
            "email": "lsnooks3@dagondesign.com",
            "gender": "Bigender",
            "ip_address": "254.122.35.146"
          }, {
            "id": 5,
            "first_name": "Regen",
            "last_name": "Sutliff",
            "email": "rsutliff4@paypal.com",
            "gender": "Agender",
            "ip_address": "102.112.87.16"
          }, {
            "id": 6,
            "first_name": "Kellby",
            "last_name": "Willshaw",
            "email": "kwillshaw5@prnewswire.com",
            "gender": "Agender",
            "ip_address": "4.88.237.54"
          }, {
            "id": 7,
            "first_name": "Urbano",
            "last_name": "Asplin",
            "email": "uasplin6@apple.com",
            "gender": "Agender",
            "ip_address": "78.112.188.218"
          }, {
            "id": 8,
            "first_name": "Gusti",
            "last_name": "Rainville",
            "email": "grainville7@un.org",
            "gender": "Agender",
            "ip_address": "160.219.115.42"
          }, {
            "id": 9,
            "first_name": "Aron",
            "last_name": "Garwood",
            "email": "agarwood8@nih.gov",
            "gender": "Female",
            "ip_address": "242.80.214.18"
          }, {
            "id": 10,
            "first_name": "Cassandra",
            "last_name": "Nalder",
            "email": "cnalder9@craigslist.org",
            "gender": "Male",
            "ip_address": "0.248.148.13"
          }]
    },
    methods:{
        say: function(text){
            return 'Hello ' + text;
        }
    }
});
console.log(vm);