import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  constructor(private userprofileservice:LoanService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(data=>{console.log(data)
      this.getemailsession=data.get('sendmail')})
      console.log(this.getemailsession)
    this.userprofileservice.getByEmail(this.getemailsession).subscribe((data)=>
    //console.log(data["userFirstName"])
    //console.log(data.userFirstName)
    //console.log(data)
     this.Personaldetails=new FormGroup(
      {
        userFirstName: new FormControl(data.userFirstName),
        userLastName: new FormControl(data['userLastName']),  
      //  userDoB: new FormControl(data['userDoB']),
        userGender: new FormControl(data['userGender']),
        userPhoneNum: new FormControl(data['userPhoneNum'],[Validators.pattern("[0-9]{10}"), Validators.required]), 
        userEmail : new FormControl(data['userEmail']),
        userAddress: new FormControl(data['userAddress']),
        userCity : new FormControl(data['userCity']),
        userState: new FormControl(data['userState']),
        userPincode: new FormControl(data['userPincode'],[Validators.pattern("[0-9]{6}")]),
        userId: new FormControl(data.userId)
       // userPassword: new FormControl(data['userPassword'])
      }  
    
    )
    )

  }
  getemailsession!:any

  Personaldetails:FormGroup = new FormGroup(
    {
      userFirstName: new FormControl(),
      userLastName: new FormControl(),  
     // userDoB: new FormControl(),
      userGender: new FormControl(),
      userPhoneNum: new FormControl('',[Validators.pattern("[0-9]{10}"), Validators.required]), 
      userEmail : new FormControl(),
      userAddress: new FormControl(),
      userCity : new FormControl(),
      userState: new FormControl(),
      userPincode: new FormControl('',[Validators.pattern("[0-9]{6}")]),
      userId:new FormControl()
     // userPassword: new FormControl('',[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"),Validators.required]),
    }
  )

  states = [
    "Andaman and Nicobar Islands",
   "Andhra Pradesh",
    "Arunachal Pradesh",
     "Assam", 
     "Bihar",
      "Chandigarh",     
  "Dadra and Nagar Haveli",
   "Daman and Diu",
    "Delhi",
     "Goa",
      "Gujarat",
       "Haryana",
        "Himachal Pradesh", 
        "Jammu and Kashmir",
         "Jharkhand",
          "Karnataka",
           "Kerala",
            "Lakshadweep", 
  "Madhya Pradesh",
   "Maharashtra",
    "Manipur", 
    "Meghalaya",
     "Mizoram",
      "Nagaland",
       "Orissa",
        "Pondicherry",
         "Punjab", 
         "Rajasthan",
          "Sikkim",
           "Tamil Nadu",
           "Telangana",
           "Tripura",
    "Uttar Pradesh",
    "Uttarkhand",
     "West Bengal",
    "Chhattisgarh"]

  AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"]
  AndhraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"]
  ArunachalPradesh=["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"]
  Assam=["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]
  Bihar=["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]
  Chandigarh=["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"]
  DadraNagarHaveli=["Dadra Nagar Haveli"]
  DamanandDiu=["Daman","Diu"]
  Delhi=["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"]
  Goa=["North Goa","South Goa"]
  Gujarat=["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"]
  Haryana=["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]
  HimachalPradesh=["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"]
  JammuKashmir=["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]
  Jharkhand=["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"]
  Karnataka=["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"]
  Kerala=["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]
  Lakshadweep=["Lakshadweep"]
  MadhyaPradesh=["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]
  Maharashtra=["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]
  Manipur=["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]
  Meghalaya=["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]
  Mizoram=["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]
  Nagaland=["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]
  Orissa=["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"]
  Pondicherry=["Karaikal","Mahe","Puducherry","Yanam"]
  Punjab=["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"]
  Rajasthan=["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"]
  Sikkim=["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]
  TamilNadu=["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]
  Telangana=["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"]
  Tripura=["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]
  Uttarkhand=["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"]
  UttarPradesh=["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]
  WestBengal=["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"]
  Chhattisgarh=["Raipur","Durg","Bilaspur","Surguja","Janjgir" ,"Rajnandgaon","Raigarh","Bastar","Korba","Mahasamund","Jashpur","Kabirdham","Dhamtari","Kanker","Korea","Dantewada","Bijapur","Narayanpur"]
  //https://codepen.io/david-arun/pen/LrqmoY
  Registrationdetails()
  {
    
    this.userprofileservice.updateDetails(this.Personaldetails.controls["userId"].value,this.Personaldetails.value).subscribe((data)=>{
      console.log(data,"User details Updated Successfully") 
      console.log(data)
  })
  alert("Details updated successfully !")
    this.route.navigateByUrl('/user-dash')

  }
  get userFirstName()
  {
    return this.Personaldetails.get("userFirstName")
  }
  get userLastName()
  {
    return this.Personaldetails.get("userLastName")
  }
 /*  get userDoB()
  {
    return this.Personaldetails.get("userDoB")
  } */
  get userGender()
  {
    return this.Personaldetails.get("userGender")
  }
  get userPhoneNum()
  {
    return this.Personaldetails.get("userPhoneNum")
  }
  get userEmail()
  {
    return this.Personaldetails.get("userEmail")
  }
 /*  get userPassword()
  {
    return this.Personaldetails.get("userPassword")
  }  */
  get userAddress()
  {
    return this.Personaldetails.get("userAddress")
  }
  get userState()
  {
    return this.Personaldetails.get("userState")
  }
  get userCity()
  {
    return this.Personaldetails.get("userCity")
  }
  get userPincode()
  {
    return this.Personaldetails.get("userPincode")
  }


}
