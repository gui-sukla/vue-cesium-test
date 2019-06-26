<template>
  <div id="cesiumBox">
    <CesiumToolPanel :id="$route.params.id" class="cesium-tool-panel"></CesiumToolPanel>
    <div id="cesiumContainer">
    </div>
  </div>
</template>

<script>
  import CesiumToolPanel from '@/components/CesiumToolPanel';
  import Cesium from 'cesium/Cesium';
  import widgets from'cesium/Widgets/widgets.css';
  export default {
    name: 'cesiumContainer',
    components: {
      CesiumToolPanel
    },
    mounted()
  {
    var viewer = new Cesium.Viewer('cesiumContainer');
  }
  ,
  data()
  {
    return {}
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cesiumBox {
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  .cesium-tool-panel{
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 200px;
    height: 250px;
    background: rgba(120,150,180,.3);
  }

  #cesiumContainer {
    width: 100%;
    height: 100%;
  }
</style>
