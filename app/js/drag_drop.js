function dragStart(ev) {
    //if (ev.currentTarget.getAttribute('data-nomove') == '0') {
        ev.dataTransfer.effectAllowed='move';
        ev.dataTransfer.setData("Text", ev.currentTarget.getAttribute('id'));
        ev.dataTransfer.setDragImage(ev.currentTarget,0,0);
        $('body').css("cursor", "wait");
        return true;
   // } else {
    //    return false;
   // }
}

function dragEnd(ev) {
    $('body').css("cursor", "default");
    return true
}

function dragEnter(ev) {
    return true;
}

function dragOver(ev) {
    return false;
}

function dragDrop(ev) {
    var error = 0;
    var err_text;
    var destination;

    var source_id = ev.dataTransfer.getData("Text");

    if (source_id != ""){
        var contract = document.getElementById(source_id);
        var parent_lavel = contract.closest('.stage').getAttribute('data-lavel');
        var kot_id_old = contract.closest('.stage').getAttribute('data-kot-id');
        var contract_id = contract.getAttribute('data-id');
        var object = contract.getAttribute('data-object');
        var type = contract.closest('.c-kanban__table').getAttribute('data-type');
    }
    else {
        error = 1;
        err_text = "Отсутствует инедтификатор";
    }

    if ($(ev.currentTarget).hasClass('stage')) {
        destination = ev.currentTarget;
    } else {
        destination = $(ev.currentTarget).closest('.stage')[0];
    }

    var destination_id = destination.getAttribute('data-kot-id');

    if (destination_id != ""){
        var destination_lavel = destination.getAttribute('data-lavel');
        var kot_id_new = destination_id;
    }
    else {
        error = 2;
        err_text = "Отсутствует инедтификатор приемника";
    }

    if ((destination_lavel - parent_lavel) > 1) {
        error = 4;
        err_text = "Задачу можно перемещать только вперед в рамках соседних этапов!";
    }

    if (error == 0) {
        if (($('input[name="user_id"]').val() == '42') || ($('input[name="user_id"]').val() == '453')){
            if (destination_lavel != parent_lavel) {
                if ((! $.isEmptyObject(object)) && (object == 'project')) {
                    var msg = {
                        action_name: 'ProjectMove',
                        d_lavel: destination_lavel,
                        s_lavel: parent_lavel,
                        kot_id_new: kot_id_new,
                        project_id: contract_id,
                        user_id: $('input[name="user_id"]').val(),
                        f_responsible_id: $('input[name="f_responsible_id"]').val(),
                        f_template_id: $('input[name="f_template_id"]').val(),
                        f_code: $('input[name="f_code"]').val(),
                        f_sub_name: $('input[name="f_sub_name"]').val(),
                        builder: 'ProjectMove'
                    };

                    g_heap["f_responsible_id"] = $('input[name="f_responsible_id"]').val();
                    g_heap["f_template_id"] = $('input[name="f_template_id"]').val();
                    g_heap["f_code"] = $('input[name="f_code"]').val();
                    g_heap["f_sub_name"] = $('input[name="f_sub_name"]').val();

                } else {
                    var msg = {
                        action_name: 'SP_CK_Move',
                        d_lavel: destination_lavel,
                        s_lavel: parent_lavel,
                        contract_id: contract_id,
                        kot_id_old: kot_id_old,
                        kot_id_new: kot_id_new,
                        user_id: $('input[name="user_id"]').val(),
                        f_responsible_id: g_heap["f_responsible_id"].toString(),
                        f_project_id: g_heap["f_project_id"].toString(),
                        type: type
                    };
                }



                // Send the msg object as a JSON-formatted string.
                WSSend(msg);

                ShowSnipper();
            }
        }
    }
    else {
        alert(err_text);
        $(".messenger").addClass("error")
        $(".messenger").html(err_text);
        $(".messenger").fadeIn("slow");
    }

    $('body').css("cursor", "default");

    return false;
}

//Блок для проектной команды

function dragStartTeam(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.currentTarget.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.currentTarget,0,0);
    $('body').css("cursor", "wait");
    return true;
}

function dragEndTeam(ev) {
    $('body').css("cursor", "default");
    return true
}

function dragEnterTeam(ev) {
    return true;
}

function dragOverTeam(ev) {
    return false;
}

function dragDropTeam(ev) {
    var error = 0;
    var err_text;

    var source_id = ev.dataTransfer.getData("Text");

    if (source_id != ""){
        var user = document.getElementById(source_id);
        var s_lavel = user.getAttribute('data-lavel');
        var tuser_id = user.getAttribute('data-id');
    }
    else {
        error = 1;
        err_text = "Отсутствует инедтификатор пользователя";
    }

    if (error == 0) {

        var destination = $(ev.currentTarget).closest('.destination')[0];

        if ($(document).find($(destination)).length > 0) {
            var d_lavel = destination.getAttribute('data-lavel');

            if (d_lavel != s_lavel) {
                var msg = {
                    action_name: "AddUserProjectTeam",
                    tuser_id: tuser_id,
                    project_id: $('input[name="project_id"]').val(),
                    selector: '.c-project-show .destination',
                    builder: 'AddUserProjectTeam',
                    user_id: $('input[name="user_id"]').val()
                };
            }

        } else {
//            var msg = {
//                action_name: "DeleteUserProjectTeam",
//                user_id: user_id,
//                project_id: $('input[name="project_id"]').val()
//            };
        }

        WSSend(msg);

        ShowSnipper();

    }
    else {
        alert(err_text);
        $(".messenger").addClass("error")
        $(".messenger").html(err_text);
        $(".messenger").fadeIn("slow");
    }

    $('body').css("cursor", "default");

    return false;
}

//Блок для назначения исполнителей

function dragStartExecuter(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.currentTarget.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.currentTarget,0,0);
    $('body').css("cursor", "wait");
    return true;
}

function dragEndExecuter(ev) {

    $('body').css("cursor", "default");
    return true
}

function dragEnterExecuter(ev) {
    return true;
}

function dragOverExecuter(ev) {
    return false;
}

function dragDownExecuter(ev) {
    return true;
}

function dragDropExecuter(ev) {

    var error = 0;
    var err_text;

    var source_id = ev.dataTransfer.getData("Text");

    if (source_id != ""){
        var user = document.getElementById(source_id);
        var s_lavel = user.getAttribute('data-lavel');
        var executer_id = user.getAttribute('data-id');
        var executer_name = user.getAttribute('data-name');
    }
    else {
        error = 1;
        err_text = "Отсутствует инедтификатор пользователя";
    }

    if (error == 0) {

        var destination = $(ev.currentTarget).closest('.c-destination')[0];

        if ($(document).find($(destination)).length > 0) {
            var d_lavel = destination.getAttribute('data-lavel');

            if (d_lavel != s_lavel) {
                var msg = {
                    action_name: "ProjectAddExecuter",
                    executer_id: executer_id,
                    executer_name: executer_name,
                    selector: '#place_modal_form .c-destination tbody',
                    builder: 'ProjectAddExecuter',
                    user_id: $('input[name="user_id"]').val()
                };
            }

        } else {
//            var msg = {
//                action_name: "DeleteUserProjectTeam",
//                user_id: user_id,
//                project_id: $('input[name="project_id"]').val()
//            };
        }
        //console.log(msg);
        WSSend(msg);

//        ShowSnipper();

    }
    else {
        alert(err_text);
        $(".messenger").addClass("error")
        $(".messenger").html(err_text);
        $(".messenger").fadeIn("slow");
    }

    $('body').css("cursor", "default");

    return false;
}
