modules.require(['i-bem-dom', 'BEMHTML', 'jquery', 'i-bem-dom__init'], function(BEMDOM, BEMHTML, $, init) {
    init();
});

modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });

});

//Websocket
var ws = new WebSocket(JSModel.ws_host);
//var ws = new WebSocket("ws://localhost:8080/ws");

function WSSend(msg) {
    if (ws.readyState != 1) {
        console.log('WSSend(msg): ' + msg);
        ws = new WebSocket(ws_host);
    }

    msg['user_id'] = $('input[name="user_id"]').val()
    ws.send(JSON.stringify(msg));
    console.log('WSSend', msg);
};

ws.onopen = function() {

    ShowSnipper();

    var msg = {
        action_name: "ShowCaptionTTS",
        date: (new Date()).toLocaleDateString('ru-RU'),
        selector: "#place_content",
        user_id: $('input[name="user_id"]').val(),
        builder: "ShowCaptionTTS",
    };

    WSSend(msg);
}

ws.onclose = function(event) {
    if (event.wasClean) {
       console.log('Соединение закрыто чисто');
    } else {
        console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }

    console.log('onclose Код: ' + event.code + ' причина: ' + event.reason);

    if (event.code == 1006) {
        window.location.reload(true);
    } else {
        ws = new WebSocket(ws_host);
    }
};

ws.onerror = function(event) {
    console.log('onerror Код: ' + event.code + ' причина: ' + event.reason);

    if (event.code == 1006) {
        window.location.reload(true);
    } else {
        ws = new WebSocket(ws_host);
    }
};

modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });

});

//Блок отрисовки канбан доски
google.charts.load('current', {'packages':['gauge', 'orgchart']});

// Write message on receive
ws.onmessage = function(e) {
    var hide_snipper = false;

    document.styleSheets[0].disabled = false;

    try {
        var answer = JSON.parse(e.data);
        //console.log('answer', answer);
        $(".messenger").removeClass("error");
        $(".messenger").removeClass("info");
        $(".messenger").html("");

        var res_code = parseInt(answer["res_code"], 10);

        if (res_code == 0) {
            JSModel.answer = answer;
            //console.log(answer);
            if (!$.isEmptyObject(answer['builder'])) {
                if (answer['builder'] == 'ReloadTaskColumnForProject') {
                    ReloadTaskColumnForProject(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "TaskNew") {
                    TaskNew(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "TaskNewForParent") {
                    TaskNewForParent(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "TaskShow") {
                    //TaskShow(answer);
                    Show(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "TaskShowChildNew") {
                    var jdata = JSON.parse(answer['data']);
                    var msg = {
                        action_name: "TaskShow",
                        task_id: jdata.ParentID.toString(),
                        user_id: $('input[name="user_id"]').val(),
                        selector: '#place_content',
                        builder: 'TaskShow'
                    };

                    WSSend(msg);

                } else if (answer["builder"] == "TaskEdit") {
                    TaskEdit(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "TaskUpdate") {
                    TaskUpdate(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "TaskKanban") {
                    TaskKanban(answer);

                } else if (answer["builder"] == "NewTaskForProject") {
                    NewTaskForProject(answer);
                    hide_snipper = true;

//                } else if (answer["builder"] == "AddUserProjectTeam") {
//                    AddUserProjectTeam(answer);
//                    hide_snipper = true;

                } else if (answer["builder"] == "ReloadTaskColumn") {
                    ReloadColumn(answer);
                    hide_snipper = true;

//                } else if (answer["builder"] == "ShowProject") {
//                    ShowProject(answer);
//                    hide_snipper = true;

                } else if (answer["builder"] == "ShowKanbanProject") {
                    $('#place_content').empty();
                    ShowKanbanProject(answer["data"]);

                } else if (answer["builder"] == "ReloadColumn") {
                    ReloadColumn(answer);

                    hide_snipper = true;
// Project section -------------------------------------------------------------
                } else if (answer["builder"] == "ProjectKanban") {
                    ProjectKanban(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectNew") {
                    ProjectNew(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectShow") {
                    ProjectShow(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectEdit") {
                    ProjectEdit(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectUpdate") {
                    ProjectUpdate(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectReloadKanbanColumn") {
                    ProjectReloadKanbanColumn(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectLoadPartitions") {
                    ProjectLoadPartitions(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectTemplate") {
                    ProjectTemplate(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectEditTasks") {
                    ProjectEditTasks(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectUpdateTasks") {
                    ProjectUpdateTasks(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectAssignExecuters") {
                    ProjectAssignExecuters(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectShowExecuters") {
                    ProjectShowExecuters(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectAddExecuter") {
                    ProjectAddExecuter(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectLoadKinds") {
                    ProjectLoadKinds(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectUpdateTemplate") {
                    ProjectUpdateTemplate(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectMove") {
                    $(answer["selector_sour"]).remove();

                    ProjectReloadKanbanColumn(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "AdminShow") {
                    AdminShow(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "AdminDepsUserLoad") {
                    AdminDepsUserLoad(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "AdminUsersLoad") {
                    AdminUsersLoad(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "AdminShowCaptionTTS") {
                    AdminShowCaptionTTS(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ShowCaptionTTS") {
                    ShowCaptionTTS(answer);

                } else if (answer["builder"] == "ReloadBodyTTS") {
                    ReloadBodyTTS(answer);

                    hide_snipper = true;

                } else if (answer["builder"] == "ReportProjectsDepartmentShow") {
                    ReportProjectsDepartmentShow(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ReportDepUtilisationShow") {
                    ReportDepUtilisationShow(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "CommonDepartmentsList") {
                    CommonDepartmentsList(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ReportDepUtilisationRun") {
                    //console.log('ReportDepUtilisationRun(answer)', answer);
                    ReportDepUtilisationRun(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectTaskClose") {
                    ProjectTaskClose(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectFAShow") {
                    //console.log('ProjectFAShow index', answer);
                    ProjectFAShow(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectFAReload") {
                    ProjectFAReload(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectTaskShow") {
                    ProjectTaskShow(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProjectTaskExecute") {
                    ProjectTaskExecute(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ProcessCardFAReload") {
                    ProcessCardFAReload(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "WorksheetShow") {
                    WorksheetShow(answer);
                    hide_snipper = true;

                }  else if (answer["builder"] == "WorksheetList") {
                    //console.log('WorksheetList answer here', answer);
                    WorksheetList(answer);
                    hide_snipper = true;

                } else if (answer["builder"] == "ReloadBodyTTS") {
                    //console.log(answer);
                    ReloadBodyTTS(answer);
                    hide_snipper = true;

                } else {
                    HideSnipper();
                }

            } else {
                if (answer["action_name"] == "IndexInitialization") {
                    TaskKanban(answer);

                } else if (answer["action_name"] == "SP_CK_Move") {
                    $(answer["selector_sour"]).remove();

                    ReloadColumnForMove(answer);

                    hide_snipper = true;



                } else if (answer["action_name"] == "ShowCaptionTTS") {
                    ShowCaptionTTS(answer);

                } else if (answer["action_name"] == "ReloadBodyTTS") {
                    ReloadBodyTTS(answer);

                    hide_snipper = true;

//                } else if (answer["action_name"] == "ReloadKanbanColumnProject") {
//                    ReloadKanbanColumnProject(answer);

//                    hide_snipper = true;

                } else if (answer["action_name"] == "NewProject") {
                    $('#place_modal_form').empty();

                    NewProject(answer["data"]);

                    hide_snipper = true;


                } else if (answer["action_name"] == "LoadTeamProject") {
                    LoadTeamProject(answer);

                    hide_snipper = true;

                }  else if (answer["action_name"] == 'ts_accept_show') {
                    ShowLabourIntensity(answer);
                    hide_snipper = true;


                }  else if (answer["action_name"] == 'ts_accept_execute') {
                    var msg = {
                        action_name: 'ts_accept_show',
                        start: moment().startOf('week').add(1, 'days').format('DD.MM.YYYY'),
                        finish: moment().endOf('week').add(1, 'days').format('DD.MM.YYYY')
                    };
                    //console.log(msg);
                    WSSend(msg);

                }  else if (answer["action_name"] == 'dashboard_show') {
                    ShowCharts(answer);
                    hide_snipper = true;

                }  else if (answer["action_name"] == 'dashboard_project_show') {
                    DashboardProjectShow(answer);
                    hide_snipper = true;

                }  else {
                    //заглушка, сюда пока падают NoAction

                    HideSnipper();
                }
            }

        } else if (res_code > 0) {
            $(".messenger").addClass("error");
            $(".messenger").html("Ошибка обработки сокета: " + answer["data"]);
            $(".messenger").fadeIn("slow");
        } else {
            //заглушка

            HideSnipper();
        }

    } catch (err) {
        $(".messenger").addClass("error");
        $(".messenger").html("Ошибка обработки сокета: " + err);
        $(".messenger").fadeIn("slow");
    }

    if (hide_snipper) {
        HideSnipper();
    }


};
