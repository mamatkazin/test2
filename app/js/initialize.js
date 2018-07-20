jQuery(function($){
    $.datepicker.regional['ru'] = {
        dateFormat: 'dd.mm.yy',
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        showButtonPanel: true
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
});

$('.pdate').datepicker();

$('.b-input-time').mask('99:99', { placeholder: 'чч:мм' });

function WSSend(msg) {
    if (ws.readyState != 1) {
        console.log('WSSend(msg): ' + msg);
        ws = new WebSocket(ws_host);
    }

    msg['user_id'] = $('input[name="user_id"]').val()
    ws.send(JSON.stringify(msg));
    console.log('WSSend', msg);
};

function ShowError(error){
    if(error==1) var err_text = "Не все обязательные поля заполнены!";
//    if(error==4) var err_text = "Дата исполнения контракта должна быть больше даты заключения!";
//    if(error==5) var err_text = "Год исполнения контракта должен быть равен максимальному году БО!";
//    if(error==6) var err_text = "Год публикации контракта должен быть равен минимальному году БО!";
//    //        if(error==7) var err_text = "Год заключения контракта должен быть равен минимальному году БО!";
//    if(error==8) var err_text = "Сумма работ по контракту не должна превышать общей суммы НМЦК!";
//    if(error==9) var err_text = "Дата завершения этапа не может быть старше даты исполнения контракта!";

    alert(err_text);

    $(".messenger").addClass("error")
    $(".messenger").html(err_text);
    $(".messenger").fadeIn("slow");
};


function summa_mask(val) {
    //маска для сумм в формате ххх ххх ххх.хх
    var local_var = val.trim();
    var sub = "";
    var newval = "";
    var len = local_var.length;
    var pos = local_var.indexOf(".");

    if (len > 0) {
        if (pos == -1) {
            local_var = local_var + ".00";
            len = len + 3;
        }
        else {
            local_var = local_var.substring(0, pos + 3);
            len = pos + 3;
        }

        var i = len;

        while (i > 0) {
            sub = local_var.substring(i - 3, i);

            if (i == len) {
                newval = sub;
            }
            else {
                newval = " " + sub + newval;
            }

            i = i - 3
        }

    }

    return newval.trim()
}





$(document).on('click', '.top-panel a', function() {
    $(this).closest('.top-panel').find('.act').removeClass('act');
    $(this).addClass('act');

    if (this.getAttribute('data-id') == '2') {
        var msg = {
            action_name: "ShowCaptionTTS",
            date: (new Date()).toLocaleDateString(),
            selector: "#place_content",
            user_id: $('input[name="user_id"]').val(),
            builder: "ShowCaptionTTS",
        };
        WSSend(msg);
    } else if (this.getAttribute('data-id') == '5') {
        var msg = {
            action_name: 'ts_accept_show',
            start: moment().startOf('week').add(1, 'days').format('DD.MM.YYYY'),
            finish: moment().endOf('week').add(1, 'days').format('DD.MM.YYYY')
        }
        WSSend(msg);
        //console.log('5', msg);
        //ShowLabourIntensity();
    } else if (this.getAttribute('data-id') == '6') {
         var msg = {
            action_name: "ReportProjectsDepartmentShow",
            selector: "#place_modal_form",
            user_id: $('input[name="user_id"]').val(),
            builder: "ReportProjectsDepartmentShow"
         };
         WSSend(msg);
    } else if (this.getAttribute('data-id') == '7') {
         var msg = {
            action_name: "ReportDepUtilisationShow",
            selector: "#place_content",
            department_id: "0",
            user_id: $('input[name="user_id"]').val(),
            builder: "ReportDepUtilisationShow"
         };
         WSSend(msg);
    } else if (this.getAttribute('data-id') == '8') {
        var msg = {
            action_name: "WorksheetShow",
            selector: "#place_content",
            builder: "WorksheetShow"
        };
        WSSend(msg);
    } else if (this.getAttribute('data-id') == '9') {
        ReportSummaryShow();
    } else if (this.getAttribute('data-id') == '10') {
        var msg = {
           action_name: "dashboard_show",
           employee_id: '0'
        };
        WSSend(msg);
    } else if (this.getAttribute('data-id') == '11') {
        ShowDashboards();
    } else if (this.getAttribute('data-id') == '13') {
        console.log('ShowCartsTest();');
        ShowCartsTest();
    } else {
        var msg = {
            action_name: "ProjectKanban",
            selector: "#place_content",
            user_id: $('input[name="user_id"]').val(),
            project_id: '0',
            f_responsible_id: g_heap['f_responsible_id'].toString(),
            f_template_id: g_heap['f_template_id'].toString(),
            f_sub_name: g_heap['f_sub_name'],
            f_code: g_heap['f_code'],
            builder: "ProjectKanban"
        };

        g_heap['type'] = 'project';

        WSSend(msg);
    }
    //console.log('getAttribute("data-id")', msg);

});




/*var elem = this.domElem, here = this;
  initCss(elem, here);*/
function initCss(elem, here) {
    if (here.params.alignItems != null) {
        elem.css('align-items', here.params.alignItems);
    }
    if (here.params.background != null) {
        elem.css('background', here.params.background);
    }
    if (here.params.backgroundColor != null) {
        elem.css('background-color', here.params.backgroundColor);
    }
    if (here.params.backgroundImage != null) {
        elem.css('background-image', here.params.backgroundImage);
    }
    if (here.params.boxShadow != null) {
        elem.css('box-shadow', here.params.boxShadow);
    }
    if (here.params.border != null) {
        elem.css('border', here.params.border);
    }
    if (here.params.borderColor != null) {
        elem.css('border-color', here.params.borderColor);
    }
    if (here.params.borderTop != null) {
        elem.css('border-top', here.params.borderTop);
    }
    if (here.params.borderRight != null) {
        elem.css('border-right', here.params.borderRight);
    }
    if (here.params.borderBottom != null) {
        elem.css('border-bottom', here.params.borderBottom);
    }
    if (here.params.borderLeft != null) {
        elem.css('border-left', here.params.borderLeft);
    }
    if (here.params.borderRadius != null) {
        elem.css('border-radius', here.params.borderRadius);
    }
    if (here.params.borderWidth != null) {
        elem.css('border-width', here.params.borderWidth);
    }
    if (here.params.color != null) {
        elem.css('color', here.params.color);
    }
    if (here.params.cursor != null) {
        elem.css('cursor', here.params.cursor);
    }
    if (here.params.flex != null) {
        elem.css('flex', here.params.flex);
    }
    if (here.params.flexGrow != null) {
        elem.css('flex-grow', here.params.flexGrow);
    }
    if (here.params.fontSize != null) {
        elem.css('font-size', here.params.fontSize);
    }
    if (here.params.fontStyle != null) {
        elem.css('font-style', here.params.fontStyle);
    }
    if (here.params.fontWeight != null) {
        elem.css('font-weight', here.params.fontWeight);
    }
    if (here.params.justifyContent != null) {
        elem.css('justify-content', here.params.justifyContent);
    }
    if (here.params.margin != null) {
        elem.css('margin', here.params.margin);
    }
    if (here.params.marginTop != null) {
        elem.css('margin-top', here.params.marginTop);
    }
    if (here.params.marginRight != null) {
        elem.css('margin-right', here.params.marginRight);
    }
    if (here.params.marginLeft != null) {
        elem.css('margin-left', here.params.marginLeft);
    }
    if (here.params.marginBottom != null) {
        elem.css('margin-bottom', here.params.marginBottom);
    }
    if (here.params.maxHeight != null) {
        elem.css('max-height', here.params.maxHeight);
    }
    if (here.params.minHeight != null) {
        elem.css('min-height', here.params.minHeight);
    }
    if (here.params.overflow != null) {
        elem.css('overflow', here.params.overflow);
    }
    if (here.params.overflowY != null) {
        elem.css('overflow-y', here.params.overflowY);
    }
    if (here.params.overflowX != null) {
        elem.css('overflow-x', here.params.overflowX);
    }
    if (here.params.padding != null) {
        elem.css('padding', here.params.padding);
    }
    if (here.params.paddingTop != null) {
        elem.css('padding-top', here.params.paddingTop);
    }
    if (here.params.paddingRight != null) {
        elem.css('padding-right', here.params.paddingRight);
    }
    if (here.params.paddingBottom != null) {
        elem.css('padding-bottom', here.params.paddingBottom);
    }
    if (here.params.paddingLeft != null) {
        elem.css('padding-left', here.params.paddingLeft);
    }
    if (here.params.position != null) {
        here.domElem.css('position', here.params.position);
    }
    if (here.params.textAlign != null) {
        elem.css('text-align', here.params.textAlign);
    }
    if (here.params.textDecoration != null) {
        elem.css('text-decoration', here.params.textDecoration);
    }
    if (here.params.transform != null) {
        here.domElem.css('transform', here.params.transform);
    }
    if (here.params.top != null) {
        elem.css('top', here.params.top);
    }
    if (here.params.left != null) {
        elem.css('left', here.params.left);
    }
    if (here.params.height != null) {
        elem.css('height', here.params.height);
    }
    if (here.params.whiteSpace != null) {
        elem.css('white-space', here.params.whiteSpace);
    }
    if (here.params.width != null) {
        elem.css('width', here.params.width);
    }
    if (here.params.wordWrap != null) {
        elem.css('wordWrap', here.params.wordWrap);
    }
}
