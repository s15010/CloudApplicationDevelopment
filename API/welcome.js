(function () {
    "use strict";


    kintone.events.on('app.recoad.index.show', function(event) {
        window.alert('レコード一覧イベント');

    });


    kintone.events.on('app.recoad.detail.show', function(event) {
        window.alert('レコード表示イベント');

    });

    kintone.events.on('app.recoad.create.show', function(event) {
        window.alert('レコード追加イベント');

    });

    kintone.events.on('app.recoad.edit.show', function(event) {
        window.alert('レコード編集イベント');

    });

    kintone.events.on('app.report.show', function(event) {
        window.alert('グラフ表示イベント');

    });
})();
