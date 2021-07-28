import { makeObservable, observable, computed, action, autorun } from "mobx";
import axios from 'axios'

export default class TaskListStore {

    // [
    //     '{{repeat(5,7)}}',
    //     {
            
    //         number: '{{objectId()}}',
    //         title: function (tags) {
    //         return 'TT' + tags.integer(50, 120) + ' - You have ' + tags.integer(1, 10) + ' unread messages.';
    //         },
    //         description: '{{lorem(1, "paragraphs")}}',
    //         dueDate: '{{date()}}',
    //         remainingTime: '7 days',
    //         creator: '{{firstName()}} {{surname()}}',
    //         assignee: '{{firstName()}}',
    //         priority: '{{integer(1, 5)}}',
    //         project: ' Project ' + '{{company().toUpperCase()}}',
    //         sprint: 'Sprint ' + '{{integer(4, 12)}}'
        
    //     }
    // ]
    

    taskList = [
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais. Deve ter uma seção para foto, uma para informações de segurança, uma para configuração da própria aplicação',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: 'Giuliano',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 2,
            title: 'TT65 - Fazer qualquer coisa',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 3,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 4,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 5,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 6,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 7,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 8,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 9,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 10,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 11,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 12,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 13,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 14,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 15,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 16,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 17,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        }
    ]

    activities = [
        {
            task: 1,
            activity: 'Page',
            duration: '00:35:12',
            status: 'ongoing'
        },
        {
            task: 2,
            activity: 'Page',
            duration: '00:35:12',
            status: 'ongoing'
        }
    ]

    setTaskList(taskList){
        this.taskList = taskList
    }

    constructor () {
        makeObservable(this, {
          taskList: observable,
          activities: observable,
          setTaskList: action,
      })
    }

}