
      var dataLayer;
//---------- Initialize map from CartoDB 
      $(document).ready(function () { 
        cartodb.createVis('map', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/3441dc88-f84f-11e5-b332-0e5db1731f59/viz.json', {
             fullscreen: true , mobile_layout: true, maxZoom: 18, zoom: 4, center_lat: 39.8282, center_lon: -98.5795})
          .done(function (vis, layers) { 
    //--------layers[1] has ALL your data layers from /CartoDB and you access different //ones by changing /the number you give to getSubLayer(). you want /something like: //dataLayer=layers[1].getSubLayer(0); /dataLayer=layers[1].getSubLayer(1);  
         
        dataLayer = layers[1].getSubLayer(0); 
        dataLayer1 = layers[1].getSubLayer(1); 
         
          
//------ Tell CartoDB it's okay if there are embedded //videos and other files in our infowindow template - //note this goes in the done ()function directly after //the datalayers - as here
            dataLayer.infowindow.set('sanitizeTemplate', 'false');       
        // Tell CartoDB to use our template from above 
            dataLayer.infowindow.set('template',  $('#infowindow_template').html());     
          
           }); 

//-----Adding button to select: Initialize the button: add an event //handler to watch for clicks 
        $('.ACO-picker').change(function() { 
          
          if($(this).val()==='all') {
     var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge";
  }
           else if($(this).val()==='1') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count =1";
  }
         else if($(this).val()==='2-5') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=2 AND count <5";
  }
  else if($(this).val()==='6-15') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=6 AND count <15";
  }
         else if($(this).val()==='16-50') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=16 AND count <50";
  }
  else if($(this).val()==='51-100') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=51 AND count <100";
  }
   else if($(this).val()==='101-200') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=101 AND count <200";
  }
  else if($(this).val()==='201-329') {
    var sql = "SELECT * FROM table_2016_mssp_acos_merge_participants_clean_count_2_merge WHERE count >=201 AND count <=328";
  } 
          dataLayer.setSQL(sql);
//----need to add -dataLayer1.setSQL(sql);- if you want function to work on sublayer1
        });  
         
      }); 
  

  
  
 //----- this is new-----//
 <script src="https://maps.googleapis.com/maps/api/js?sensor=false&v=3.8"></script>
 
<script src="http://libs.cartocdn.com/cartodb.js/v3/cartodb.js"></script>

    //Change the URL's below in order to change the maps that are being shown.
     //   map1 is the one on the left side and map2 is the one on the right side.
     //   Go to your map view in CartoDB, click on share, and copy the URL under the API section
     //   Check the cartodb.js documentation for more info
     //   http://developers.cartodb.com/documentation/cartodb-js.html
    <script type="text/javascript">
      var map2,map3;
      var dataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('map2', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/75dc5b88-031b-11e6-ab91-0ea31932ec1d/viz.json',
                       {mobile_layout: true, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        map2 = vis.mapView.map;
        dataLayer = layers[1].getSubLayer(0); 
       dataLayer1 = layers[1].getSubLayer(1); 
      });
              
    $(document).ready(function () { 
        cartodb.createVis('map3', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/9f6a6a1a-0327-11e6-94ff-0e787de82d45/viz.json',
                         {mobile_layout: true, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
        map3 = vis.mapView.map;
           map2.on('change:zoom change:center', function(e) {
             changeMapState(map2, map3);
           });
           map3.on('change:zoom change:center', function(e) {
            changeMapState(map3, map2);
          
         dataLayer = layers[1].getSubLayer(0); 
        dataLayer1 = layers[1].getSubLayer(1); 
           });     
        });
      })
    
 //-----Adding button to select: Initialize the button: add an event //handler to watch for clicks      
    $('.poverty-picker').change(function() { 
      var perc_below_povlevel_hc03 = $(this).val();
          var sql;
          if (perc_below_povlevel_hc03 === 'all') {
     sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge";
  }
        else if(perc_below_povlevel_hc03==='1-8.5') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 =>1 AND perc_below_povlevel_hc03 <8.5";
  }
         else if(perc_below_povlevel_hc03==='8.5-13.3') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=8.5 AND perc_below_povlevel_hc03 <13.3";
  }
  else if(perc_below_povlevel_hc03==='13.3-18.1') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=13.3 AND perc_below_povlevel_hc03 <18.1";
  }
         else if(perc_below_povlevel_hc03==='18.1-22.8') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=18.1 AND perc_below_povlevel_hc03 <22.8";
  }
  else if(perc_below_povlevel_hc03==='22.8-27.6') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=22.8 AND perc_below_povlevel_hc03 <27.6";
  }
   else if(perc_below_povlevel_hc03==='27.6-35.5') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=27.6 AND perc_below_povlevel_hc03 <35.5";
  }
  else if(perc_below_povlevel_hc03==='35.5-52.6') {
    sql = "SELECT * FROM churc186.acs_14_5yr_s1701_pov_clean_merge WHERE perc_below_povlevel_hc03 >=35.5 AND perc_below_povlevel_hc03 <=52.6";
  } 
          dataLayer.setSQL(sql);
        });
    });
  
      
///Applies the same view from src to tgt map
      function changeMapState(src,tgt){
        tgt.set({
           'center': src.get('center'),
           'zoom': src.get('zoom')
        });
      }
  
  
  
 //ADD maps 4 and 5 again side by side centered 
   <script src="https://maps.googleapis.com/maps/api/js?sensor=false&v=3.8"></script>     
  <script type="text/javascript">
      var map4,map5;
      var dataLayer;
        
    $(document).ready(function () { 
      cartodb.createVis('map4', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/efcb067a-0329-11e6-9880-0e3ff518bd15/viz.json',
                       {mobile_layout: true, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
      .done(function(vis, layers) {
        map4 = vis.mapView.map;
        dataLayer = layers[1].getSubLayer(0); 
       dataLayer1 = layers[1].getSubLayer(1); 
      });
              
    $(document).ready(function () { 
        cartodb.createVis('map5', 'https://thenewschool.cartodb.com/u/churc186/api/v2/viz/efcb067a-0329-11e6-9880-0e3ff518bd15/viz.json',
                         {mobile_layout: true, maxZoom:18, zoom:4, center_lat: 39.8282, center_lon: -98.5795 })
        .done(function(vis, layers) {
        map5 = vis.mapView.map;
           map4.on('change:zoom change:center', function(e) {
             changeMapState(map4, map5);
           });
           map5.on('change:zoom change:center', function(e) {
            changeMapState(map5, map4);
          
         dataLayer = layers[1].getSubLayer(0); 
        dataLayer1 = layers[1].getSubLayer(1); 
           });     
        });
      })
    
    dataLayer.setSQL(sql);
        });
    
    function changeMapState(src,tgt){
        tgt.set({
           'center': src.get('center'),
           'zoom': src.get('zoom')
        });
      }
