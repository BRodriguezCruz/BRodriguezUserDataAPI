$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport',
        dataType: 'JSON',
        data: '',
        success: function (info) {
            var data =
                '<blockquote class="blockquote">'
                + '<p>' + 'Usuario: ' + info.people[0].name + ' ' + info.people[0].lastName + '</p>'
                + '</blockquote>'
                + '<figcaption class="blockquote-footer">' + 'Correo Electronico:  ' + '<cite title="Source Title">' + ' ' +  info.email + '</cite>'
                + '</figcaption>';
            $("#titleUser").append(data);
            $.each(info.inscriptions, function (i, navegar) {
                var fila =
                    '<tr>'
                        + '<td>' + navegar.courseId + '</td>'
                        + '<td>' + '<img src = "' + navegar.course.imageUrl + '"' + 'width="50px"' +'height = "50px"' + 'class="rounded-circle"' + '/>' + '</td>'
                        + '<td>' + navegar.course.name + '</td>'
                        + '<td>' + navegar.course.sector.name + '</td>'
                            + '<td>' + navegar.inscripcionDate + '</td>'
                        + '<td>'
                            + '<div class="progress">'
                                + '<div class="progress-bar  progress-bar-striped bg-warning" role="progressbar" style="width:' + navegar.advance + '%;"' + 'aria-valuenow="' + navegar.advance + '"' + 'aria - valuemin="0" aria - valuemax="100" > ' + navegar.advance + ' % ' + '</div > '
                            + '</div>'
                        + '</td>'
                  + '</tr>';
                $("#tblDataUser tbody").append(fila);
            });
        },
        error: function (info) {
            alert('Ocurrio un error');
        }
    });
};
