window.onload = (function() {

  // Highlight non-breaking spaces on exit

  var lastchanged = "";

  function wasUnselected(s1,s2) {
    sel1 = s1.indexOf('CodeMirror-focused') > -1;
    sel2 = s2.indexOf('CodeMirror-focused') > -1;

    return (sel1 && !sel2);
  };

  function updateNBSC(element) {
    if (element === lastchanged) {
      return;
    } else {
//      lastchanged = element;
    };
    $(element).find(".CodeMirror-line span").each(function(index) {
      var nbsc  = String.fromCharCode(0x202F);
      var nrxp  = RegExp(nbsc, 'g');
      var text  = $(this).text();
      var textf = text.replace(nrxp, '<span style="background-color:yellow">'+nbsc+'</span>');
      $(this).html(textf);
    });
  };

  var classObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mut) {
      if (wasUnselected(mut.oldValue, $(mut.target).attr('class'))) {
        updateNBSC(mut.target);
      };
    });
  });

  // Scroll along with caret

  var cursors = new Map();
  var codelines = new Map();

  var default_cursor_x = 0;

  function checkCursorPos() {
    setTimeout(function(){
      var element = $(".CodeMirror-wrap").children().not("[class*='CodeMirror']")
      if (element.length > 0) {
        default_cursor_x = element.attr('style').match(/left: (.*?)px/)[1];
      } else {
        checkCursorPos();
      }
    }, 50);
  }
  checkCursorPos();

  function updateScrolling(cursorGfxs) {
    var left_g, left_d, code, diff, cursorData = $(cursors.get(cursorGfxs)).find(".CodeMirror-cursor")[0];
    
    if (cursorData === undefined) return;

    [,left_g] = $(cursorGfxs).attr('style').match(/left: (.*?)px/);
    [,left_d] = $(cursorData).attr('style').match(/left: (.*?)px/);

    left_g = Math.round(left_g-default_cursor_x);
    left_d = Math.round(left_d)

    code = codelines.get(cursorGfxs);
    diff = left_d - (left_g + code.scrollLeft);

    if (left_d >= 0 && ((diff > 0) || (left_g <= 0 && diff < 0))) {
      code.scrollBy({left:diff});
    }
  };

  function caretObserverFunction(cgfx) {
    return function (mutations) {
      for (m of mutations) {
        updateScrolling(cgfx);
      }
    }
  };

  function makeCaretObserver(cgfx) {
    return new MutationObserver(caretObserverFunction(cgfx));
  }

  // Apply observers
  
  var dom_cells = $.makeArray($("#notebook-container").children());
  var cmo_cells = Jupyter.notebook.get_cells();

  dom_cells.forEach(function (child,i) {
    var cursorGraphics = $(child).find(".CodeMirror-wrap").children().not("[class*='CodeMirror']")[0];
    var cursorData     = $(child).find(".CodeMirror-cursor")[0];
    var cursorTracker  = $(child).find(".CodeMirror-cursors")[0];
    var focusTracker   = $(child).find(".input_area").children()[0];

    cursors.set(cursorGraphics, cursorTracker);
    codelines.set(cursorGraphics, $(child).find(".CodeMirror-lines")[0]);
    
    classObserver.observe(focusTracker, {attributes: true, attributeOldValue: true, attributeFilter: ["class"]});
    makeCaretObserver(cursorGraphics).observe(cursorTracker, {childList: true});
  });
});

