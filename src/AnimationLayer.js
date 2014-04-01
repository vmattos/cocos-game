var AnimationLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();

        var winSize = cc.Director.getInstance().getWinSize();
        var centerPos = cc.p(80, 85);
        //cerate the hero sprite
        var spriteRunner = cc.Sprite.create(s_runner);
        spriteRunner.setPosition(centerPos);

        //create the move action
        var actionTo = cc.MoveTo.create(2, cc.p(300, 85));
        spriteRunner.runAction(cc.Sequence.create(actionTo));
        this.addChild(spriteRunner);
    }
});