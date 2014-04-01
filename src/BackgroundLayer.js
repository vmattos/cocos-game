var BackgroundLayer = cc.Layer.extend({
    map00:null,
    map01:null,
    mapWidth:0,
    mapIndex:0,
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        this.map00 = cc.TMXTiledMap.create(s_map00);
        this.addChild(this.map00);
        this.mapWidth = this.map00.getContentSize().width;
        this.map01 = cc.TMXTiledMap.create(s_map01);
        this.map01.setPosition(cc.p(this.mapWidth, 0));
        this.addChild(this.map01);
    }
});