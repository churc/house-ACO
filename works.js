//--Initialize map from CartoDB 
var dataLayer;
var dataLayer1;
var dataLayer2;
var dataLayer3;

      $(document).ready(function() {
        cartodb.createVis('map', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/3441dc88-f84f-11e5-b332-0e5db1731f59/viz.json', {
            cartodb_logo: false, fullscreen: true, maxZoom: 18, zoom: 4, center_lat: 39.8282, center_lon: -98.5795})
          .done(function(vis, layers){
//--///////layers[1] has ALL your data layers from /CartoDB and you access different//ones by changing/the number you give to getSubLayer(). you want /something like: //dataLayer=layers[1].getSubLayer(0); /dataLayer=layers[1].getSubLayer(1);  
         
     dataLayer = layers[1].getSubLayer(0);
    dataLayer1 = layers[1].getSubLayer(1);
	// dataLayer2 = layers[1].getSubLayer(2);
  	 //dataLayer3 = layers[1].getSubLayer(3);   
     
          
//--Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template//note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
//--Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());
     });

//--///Adding button to select: Initialize the button: add an event //handler to watch for clicks 
        $('.ACO-picker').change(function(){
		var sql;
        	if ($(this).val()==='all'){
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge";
  }
           else if ($(this).val()==='1') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count =1";
  }
         else if ($(this).val()==='2-5') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=2 AND count <5";
  }
  		else if ($(this).val()==='6-15') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=6 AND count <15";
  }
         else if ($(this).val()==='16-50') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=16 AND count <50";
  }
  		else if ($(this).val()==='51-100') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=51 AND count <100";
  }
   		else if ($(this).val()==='101-200') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=101 AND count <200";
  }
  		else if ($(this).val()==='201-329') {
     sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=201 AND count <=328";
  } 
          dataLayer1.setSQL(sql);
//--////need to add -dataLayer1.setSQL(sql);-- if you want function to work on sublayer1
  }); 
		 
        
//
// CHECKboxes - track 1, 2 or 3 - Update the SQL by looking at all the checkboxes and creating the SQL with all of them.
               
//
// Update the SQL by looking at all the checkboxes and creating the SQL with all of them.
//
         function updateSql() {
 // Start with assuming we'll select everything
         
          var sql2 = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge";
          
// This will be the list of conditions, if anything's selected
          var whereConditions = [];
          
 // If track 1 is checked add a where condition
          if ($('.track-1-checkbox').is(':checked')) {
            whereConditions.push("track_1 = '1'");
          }
          
 // If track 2 is checked add another where condition
          if ($('.track-2-checkbox').is(':checked')) {
            whereConditions.push("track_2 = '1'");
          }
 // If track 3 is checked add another where condition
          if ($('.track-3-checkbox').is(':checked')) {
          whereConditions.push("track_3 = '1'");
         }
          
// If anything was checked, add "WHERE" and combine all of the conditions with "OR"
          if (whereConditions.length > 0) {
            sql2 += ' WHERE ' + whereConditions.join(' OR ');
          }
          
// Log out the SQL to ensure we have something that will work
          console.log(sql2);
          dataLayer1.setSQL(sql2);
        }

//
// Initialize the checkboxes: add an event handler to watch for change
//
        $('.track-1-checkbox').change(function () {
          updateSql();
        });
        $('.track-2-checkbox').change(function () {
          updateSql();
        }); 
        $('.track-3-checkbox').change(function () {
          updateSql();
       });  
           
        
//new 
       function updateSqlagtype() {
		var sqlagtype = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge";
           
     var whereConditions1 = [];
           
        if ($('.initial-checkbox').is(':checked')) {
            whereConditions1.push("aco_agreement_type = 'Initial'");
          }
          
 // If track 2 is checked add another where condition
         if ($('.renewal-checkbox').is(':checked')) {
           whereConditions1.push("aco_agreement_type = 'Renewal'");
         }  
           
     if (whereConditions1.length > 0) {
           sqlagtype += ' WHERE ' + whereConditions1.join(' OR ');
         }
          
          // Log out the SQL to ensure we have something that will work
         console.log(sqlagtype);
         dataLayer1.setSQL(sqlagtype);
        }

        // Initialize the checkboxes: add an event handler to watch for change
        //
       $('.initial-checkbox').change(function () {
          updateSqlagtype();
        });
       $('.renewal-checkbox').change(function () {
          updateSqlagtype();
       });
    }); 
         
       

 $(document).ready(function() {
        cartodb.createVis('mapB', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/cf91f0e2-1483-11e6-b6e7-0e787de82d45/viz.json', {
            cartodb_logo: false, fullscreen: true, maxZoom: 18, zoom: 4, center_lat: 39.8282, center_lon: -98.5795})
          .done(function(vis, layers){
//--///////layers[1] has ALL your data layers from /CartoDB and you access different//ones by changing/the number you give to getSubLayer(). you want /something like: //dataLayer=layers[1].getSubLayer(0); /dataLayer=layers[1].getSubLayer(1);  
         
     BdataLayer = layers[1].getSubLayer(0);
    BdataLayer1 = layers[1].getSubLayer(1);
	 BdataLayer2 = layers[1].getSubLayer(2);
  	 BdataLayer3 = layers[1].getSubLayer(3);   
     
          
//--Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template//note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
//--Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());
     });
});



 //--////this is new/////--//
 //Change the URL's below in order to change the maps that are being shown.
 //map1 is the one on the left side and map2 is the one on the right side.
 //Go to your map view in CartoDB, click on share, and copy the URL under the API section
 //Check the cartodb.js documentation for more info
 //http://developers.cartodb.com/documentation/cartodb-js.html
    
      var mapC,mapD;
      var UAdataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('mapC', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/dc30b2b6-149c-11e6-90aa-0e5db1731f59/viz.json', {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        mapC = vis.mapView.map;
        UAdataLayer = layers[1].getSubLayer(0); 
        UAdataLayer1 = layers[1].getSubLayer(1); 
	    UAdataLayer2 = layers[1].getSubLayer(2);
  	    UAdataLayer3 = layers[1].getSubLayer(3); 
        
        //--//// Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
      });
              
    $(document).ready(function () { 
        cartodb.createVis('mapD', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/f283f498-13c9-11e6-8d27-0e674067d321/viz.json', {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
         mapD = vis.mapView.map;
          
           adataLayer = layers[1].getSubLayer(0); 
           adataLayer1 = layers[1].getSubLayer(1); 
          
            //--//// Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
        
           mapC.on('change:zoom change:center', function(e) {
             changeMapState(mapC, mapD);
           });
           mapD.on('change:zoom change:center', function(e) {
            changeMapState(mapD, mapC);
          });
         
        });
    });  
 });




//--////this is new/////--//
 //Change the URL's below in order to change the maps that are being shown.
 //map1 is the one on the left side and map2 is the one on the right side.
 //Go to your map view in CartoDB, click on share, and copy the URL under the API section
 //Check the cartodb.js documentation for more info
 //http://developers.cartodb.com/documentation/cartodb-js.html
    
      var mapE,mapF;
      var yrdataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('mapE', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/6207cf70-14e1-11e6-a6da-0e31c9be1b51/viz.json', {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        mapE = vis.mapView.map;
        yrdataLayer = layers[1].getSubLayer(0); 
        yrdataLayer1 = layers[1].getSubLayer(1); 
	    yrdataLayer2 = layers[1].getSubLayer(2);
  	    yrdataLayer3 = layers[1].getSubLayer(3); 
        
        //--//// Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
      });
              
    $(document).ready(function () { 
        cartodb.createVis('mapF', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/f283f498-13c9-11e6-8d27-0e674067d321/viz.json', {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
         mapF = vis.mapView.map;
          
           sdataLayer = layers[1].getSubLayer(0); 
           sdataLayer1 = layers[1].getSubLayer(1); 
          
            //--//// Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
        
           mapE.on('change:zoom change:center', function(e) {
             changeMapState(mapE, mapF);
           });
           mapF.on('change:zoom change:center', function(e) {
            changeMapState(mapF, mapE);
          });
         
        });
    });  
 });



      var map2,map3;
      var povdataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('map2', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/75dc5b88-031b-11e6-ab91-0ea31932ec1d/viz.json',
                       {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        map2 = vis.mapView.map;
        povdataLayer = layers[1].getSubLayer(0); 
       povdataLayer1 = layers[1].getSubLayer(1); 
        
        //--//// Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
      });
              
    $(document).ready(function () { 
        cartodb.createVis('map3', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/9f6a6a1a-0327-11e6-94ff-0e787de82d45/viz.json',
                         {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
        map3 = vis.mapView.map;
          
           eddataLayer = layers[1].getSubLayer(0); 
           eddataLayer1 = layers[1].getSubLayer(1); 
          
            //--//// Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
        
           map2.on('change:zoom change:center', function(e) {
             changeMapState(map2, map3);
           });
           map3.on('change:zoom change:center', function(e) {
            changeMapState(map3, map2);
          });        
        });
      });
    
 //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.poverty-picker').change(function() { 
      var perc_below_povlevel_hc03 = $(this).val();
          var sqlpov;
          if (perc_below_povlevel_hc03 === 'all') {
     sqlpov = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge";
  }
        else if(perc_below_povlevel_hc03==='1-14.9') {
    sqlpov = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 =>1 AND perc_below_povlevel_hc03 <14.9";
  }
         else if(perc_below_povlevel_hc03==='14.9-26') {
    sqlpov = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=14.9 AND perc_below_povlevel_hc03 <26";
  }
  else if(perc_below_povlevel_hc03==='26-52.6') {
    sqlpov = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=26 AND perc_below_povlevel_hc03 <52.6";
  }       
          povdataLayer.setSQL(sqlpov);
        });
    
  
 //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.highschoolgrad-picker').change(function() { 
      var totestperchsg_hc01_est_vc16 = $(this).val();
          var sqled;
          if (totestperchsg_hc01_est_vc16 === 'all') {
     sqled = "SELECT * FROM acs_14_5yr_s1501_education_clean_merge";
  }
        else if(totestperchsg_hc01_est_vc16==='98.7-86.35') {
    sqled = "SELECT * FROM acs_14_5yr_s1501_education_clean_merge WHERE totestperchsg_hc01_est_vc16 <=98.7 AND totestperchsg_hc01_est_vc16 >86.35";
  }
         else if(totestperchsg_hc01_est_vc16==='86.35-75.25') {
    sqled = "SELECT * FROM acs_14_5yr_s1501_education_clean_merge WHERE totestperchsg_hc01_est_vc16 <=86.35 AND totestperchsg_hc01_est_vc16 >75.25";
  }
  else if(totestperchsg_hc01_est_vc16==='75.25-46.7') {
    sqled = "SELECT * FROM acs_14_5yr_s1501_education_clean_merge WHERE totestperchsg_hc01_est_vc16 <=75.25 AND totestperchsg_hc01_est_vc16 >=46.7";
  }      
          eddataLayer.setSQL(sqled);
        });
    });
    
//Applies the same view from src to tgt map
      function changeMapState(src,tgt){
        tgt.set({
           'center': src.get('center'),
           'zoom': src.get('zoom')
        });
      }
  
    
 //ADD maps 4 and 5 again side by side centered 
        
      var map4,map5;
      var disdataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('map4', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/efcb067a-0329-11e6-9880-0e3ff518bd15/viz.json',
                       {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        map4 = vis.mapView.map;
        disdataLayer = layers[1].getSubLayer(0); 
         disdataLayer1 = layers[1].getSubLayer(1); 
   
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html()); 
      });
              
    $(document).ready(function () { 
        cartodb.createVis('map5', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/bdf8c93c-0f1a-11e6-81c0-0ecd1babdde5/viz.json',
                         {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
        map5 = vis.mapView.map;
          
        agedataLayer = layers[1].getSubLayer(0); 
        agedataLayer1 = layers[1].getSubLayer(1); 
          
             dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template', $('#infowindow_template').html());     
          
           map4.on('change:zoom change:center', function(e) {
             changeMapState(map4, map5);
           });
           map5.on('change:zoom change:center', function(e) {
            changeMapState(map5, map4);
          
           });     
        });
      });
    
      
      //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.disability-picker').change(function() { 
      var percwadisab_esttotcivnoninstpop_hc03_est_vc01 = $(this).val();
          var sqldis;
          if (percwadisab_esttotcivnoninstpop_hc03_est_vc01 === 'all') {
     sqldis = "SELECT * FROM acs_14_5yr_s1810_disability_clean_merge";
  }
        else if(percwadisab_esttotcivnoninstpop_hc03_est_vc01==='4.4-13.5') {
    sqldis = "SELECT * FROM acs_14_5yr_s1810_disability_clean_merge WHERE percwadisab_esttotcivnoninstpop_hc03_est_vc01 >=4.4 AND percwadisab_esttotcivnoninstpop_hc03_est_vc01 <13.5";
  }
         else if(percwadisab_esttotcivnoninstpop_hc03_est_vc01==='13.5-21.6') {
    sqldis = "SELECT * FROM acs_14_5yr_s1810_disability_clean_merge WHERE percwadisab_esttotcivnoninstpop_hc03_est_vc01 >=13.5 AND percwadisab_esttotcivnoninstpop_hc03_est_vc01 <21.6";
  }
  else if(percwadisab_esttotcivnoninstpop_hc03_est_vc01==='21.6-34') {
    sqldis = "SELECT * FROM acs_14_5yr_s1810_disability_clean_merge WHERE percwadisab_esttotcivnoninstpop_hc03_est_vc01 >=21.6 AND percwadisab_esttotcivnoninstpop_hc03_est_vc01 <=34";
  }
       
        disdataLayer.setSQL(sqldis);
        });
      
 //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.age65-picker').change(function() { 
      var total_65_andover = $(this).val();
          var sqlage;
          if (total_65_andover === 'all') {
     sqlage = "SELECT * FROM acs_14_5yr_s0101_with_ann_65_clean_merge";
  }
        else if(total_65_andover==='3.3-14.05') {
    sqlage = "SELECT * FROM acs_14_5yr_s0101_with_ann_65_clean_merge WHERE total_65_andover >=3.3 AND total_65_andover <14.05";
  }
         else if(total_65_andover==='14.05-22.45') {
    sqlage = "SELECT * FROM acs_14_5yr_s0101_with_ann_65_clean_merge WHERE total_65_andover >=14.05 AND total_65_andover <22.45";
  }
  else if(total_65_andover==='22.45-48.7') {
    sqlage = "SELECT * FROM acs_14_5yr_s0101_with_ann_65_clean_merge WHERE total_65_andover >=22.45 AND total_65_andover <=48.7";
  }      
          agedataLayer.setSQL(sqlage);
        });      
       });
    
    function changeMapState(src,tgt){
        tgt.set({
           'center': src.get('center'),
           'zoom': src.get('zoom')
        });
    }


//ADD maps 6 and 7 again side by side centered 
       
 
      var map6,map7;
      var blafrdataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('map6', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/f8cdeae6-0f57-11e6-b6c3-0e5db1731f59/viz.json',
                       {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        map6 = vis.mapView.map;
        blafrdataLayer = layers[1].getSubLayer(0); 
        blafrdataLayer1 = layers[1].getSubLayer(1); 
         
        dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());
      });
              
    $(document).ready(function () { 
        cartodb.createVis('map7', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/365faa88-0fa9-11e6-b90f-0ecfd53eb7d3/viz.json',
                         {cartodb_logo: false, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
        map7 = vis.mapView.map;
        hispdataLayer = layers[1].getSubLayer(0); 
        hispdataLayer1 = layers[1].getSubLayer(1); 
          
             dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());  
        
           map6.on('change:zoom change:center', function(e) {
             changeMapState(map6, map7);
           });
           map7.on('change:zoom change:center', function(e) {
            changeMapState(map7, map6);
         
           });     
        });
      });
     
      
      
        //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.blafr-picker').change(function() { 
      var percenthisporlatinoandracetotpopnohlblkorafamalone= $(this).val();
          var sqlb;
          if (percenthisporlatinoandracetotpopnohlblkorafamalone=== 'all') {
     sqlb = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1";
  }
        else if(percenthisporlatinoandracetotpopnohlblkorafamalone==='0-16.65') {
    sqlb = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1 WHERE  percenthisporlatinoandracetotpopnohlblkorafamalone >=0 AND  percenthisporlatinoandracetotpopnohlblkorafamalone<16.65";
  }
         else if(percenthisporlatinoandracetotpopnohlblkorafamalone==='16.65-36.25') {
    sqlb = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1 WHERE  percenthisporlatinoandracetotpopnohlblkorafamalone >=16.65 AND  percenthisporlatinoandracetotpopnohlblkorafamalone<36.25";
  }
  else if(percenthisporlatinoandracetotpopnohlblkorafamalone==='36.25-85.9') {
    sqlb = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1 WHERE  percenthisporlatinoandracetotpopnohlblkorafamalone >=36.25 AND  percenthisporlatinoandracetotpopnohlblkorafamalone<=85.9";
  }
        blafrdataLayer1.setSQL(sqlb);
        });
      
 //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.hisp-picker').change(function() { 
      var percenthisporlatinoandracetotpophisporlatino_ofanyrace= $(this).val();
          var sqlhl;
          if (percenthisporlatinoandracetotpophisporlatino_ofanyrace === 'all') {
     sqlhl = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1";
  }
        else if(percenthisporlatinoandracetotpophisporlatino_ofanyrace==='0-14.45') {
    sqlhl = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1  WHERE percenthisporlatinoandracetotpophisporlatino_ofanyrace >=0 AND percenthisporlatinoandracetotpophisporlatino_ofanyrace <14.45";
  }
         else if(percenthisporlatinoandracetotpophisporlatino_ofanyrace==='14.45-34.3') {
    sqlhl = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1  WHERE percenthisporlatinoandracetotpophisporlatino_ofanyrace >=14.45 AND percenthisporlatinoandracetotpophisporlatino_ofanyrace<34.3";
  }
  else if(percenthisporlatinoandracetotpophisporlatino_ofanyrace==='34.3-95.7') {
    sqlhl = "SELECT * FROM acs_14_5yr_dp05_demographic_race_ed_clean_merge_1  WHERE percenthisporlatinoandracetotpophisporlatino_ofanyrace>=34.3 AND percenthisporlatinoandracetotpophisporlatino_ofanyrace<=95.7";
  }      
          hispdataLayer1.setSQL(sqlhl);
        });       
       });
    
    function changeMapState(src,tgt){
        tgt.set({
           'center': src.get('center'),
           'zoom': src.get('zoom')
        });
    }