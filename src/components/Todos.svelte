<div class="background">
    <div class="top"></div>
    <div class="bottomleft"></div>
    <div class="bottomright"></div>
</div>

<style>
.background{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1000vh;
    background-color: gray;
    }
.top {
    background-color: black;
    position: absolute;
    margin-top: 300px;
    width: 840px;
    height: 300px;
    }
.bottomright {
    background-color: white;
    width: 420px;
    height: 300px;
    position: absolute;
    margin-top: 600px;
    margin-right: 420px;
}
.bottomleft {
    background-color: red;
    width: 420px;
    height: 300px;
    position: absolute;
    margin-top: 600px;
    margin-right: -420px;
}
</style>