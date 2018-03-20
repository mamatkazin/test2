'use strict';
function ReportSummaryShow(){
    $('#place_modal_form').empty();
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find('#place_modal_form'), BEMHTML.apply({
            block: 'c-project-new',
            cls: 'modal-dialog',
            content: [
                {
                    block: 'b-block',
                    cls: 'modal-content',
                    js: {
                        width: '509px',
                        height: '213px',
                        margin: 'auto'
                    },
                    content: [
                        {
                            cls: 'modal-body',
                            content: [
                                {
                                    cls: 'panel panel-primary',
                                    content: [
                                        {
                                            cls: 'panel-heading',
                                            content: [
                                                {
                                                    tag: 'button',
                                                    cls: 'close',
                                                    attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
                                                    content: 'x'
                                                },
                                                {
                                                    tag: 'h3',
                                                    cls: 'panel-title modal-title',
                                                    content: 'Сводка отчёта'
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-body',
                                            content: [
                                                {
                                                    tag: 'form',
                                                    attrs: {
                                                        role: "form", 
                                                        enctype: "multipart/form-data", 
                                                        action: "/report-summary", 
                                                        method: "post"
                                                    },
                                                    content: [
                                                        {
                                                            block: 'b-combobox-field',
                                                            attrs: {style: 'width: 100%;'},
                                                            content: [
                                                                {
                                                                    block: 't-patterns__combobox',
                                                                    js: { 
                                                                        
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-flex-row',
                                                            js: {},
                                                            content: [
                                                                {
                                                                    block: 'b-flex-row',
                                                                    js: {
                                                                        alignItems: 'center',
                                                                        marginRight: '8px'
                                                                    },
                                                                    content: 'Задайте период с '
                                                                },
                                                                {
                                                                    block: 'b-date-field',
                                                                    js: { min_date: -14 },
                                                                    mods: { property : 'position'},
                                                                    content:
                                                                    [
                                                                        {
                                                                            elem: 'checkInput',
                                                                            js: true,
                                                                            cls: 'pdate b-input dateInput',
                                                                            tag: 'input',
                                                                            attrs:
                                                                                {
                                                                                    type: 'text',
                                                                                    maxlength: 10,
                                                                                    name: 'start'
                                                                                }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-flex-row',
                                                                    js: {
                                                                        alignItems: 'center',
                                                                        marginLeft: '8px',
                                                                        marginRight: '8px'
                                                                    },
                                                                    content: 'по'
                                                                },
                                                                {
                                                                    block: 'b-date-field',
                                                                    js: { min_date: -14 },
                                                                    mods: { property : 'position'},
                                                                    content:
                                                                    [
                                                                        {
                                                                            elem: 'checkInput',
                                                                            js: true,
                                                                            cls: 'pdate b-input dateInput',
                                                                            tag: 'input',
                                                                            attrs:
                                                                                {
                                                                                    type: 'text',
                                                                                    maxlength: 10,
                                                                                    name: 'finish'
                                                                                }
                                                                     
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-button',
                                                                    tag: 'button',
                                                                    js: {
                                                                        height: '26px',
                                                                        marginLeft: '8px',
                                                                        backgroundColor: '#337ab7'
                                                                    },
                                                                    cls: 'btn btn-default',
                                                                    attrs: { type: 'submit'},
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            tag: 'span',
                                                                            attrs: { style: 'position: relative; top: -4px; color: white;'}, 
                                                                            content: 'Сформировать'
                                                                        }
                                                                    ]
                                                                }
                                                            ] 
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'c-modal-form__panel-footer',
                                            cls: 'panel-footer',
                                            content: [
                                                {
                                                    tag: 'button',
                                                    cls: 'btn btn-default',
                                                    attrs: { type: 'button', 'data-dismiss': 'modal' },
                                                    content: [
                                                        {
                                                            elem: 'text',
                                                            tag: 'span',
                                                            content: 'Отмена'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }));
        
        $('#place_modal_form').modal('show');
    });
}