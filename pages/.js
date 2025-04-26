eventClick: function(info) {
    // すでに強調されているイベントをリセット
    document.querySelectorAll('.highlight-event').forEach(el => {
      el.classList.remove('highlight-event');
    });
  
    // 今クリックされたイベントに強調クラスを追加
    info.el.classList.add('highlight-event');
  
    // URL更新（必要なら）
    const id = info.event.extendedProps.id;
    const url = new URL(window.location.href);
    url.searchParams.set('selected_id', id);
    window.location.href = url.toString();
  }