
function totalSet() {
	var labels = ['adcloudmedia.com','gostats.com','gostats.com/help/free-counter','gostats.com/press','gostats.com/web-stats','monster.gostats.com','c5.gostats.com','c3.gostats.com','gostats.in','gostats.ru'];
	
	// Create and populate the data table.
	var dataset = new google.visualization.DataTable();
	dataset.addColumn('string', 'Referrer');
	dataset.addColumn('number', 'Total');
	dataset.addRows(labels.length);
	dataset.setCell(0,0, 'adcloudmedia.com');
	dataset.setCell(0,1, 49178);
	dataset.setCell(1,0, 'gostats.com');
	dataset.setCell(1,1, 37879);
	dataset.setCell(2,0, 'gostats.com/help/free-counter');
	dataset.setCell(2,1, 1533);
	dataset.setCell(3,0, 'gostats.com/press');
	dataset.setCell(3,1, 26179);
	dataset.setCell(4,0, 'gostats.com/web-stats');
	dataset.setCell(4,1, 356);
	dataset.setCell(5,0, 'monster.gostats.com');
	dataset.setCell(5,1, 3790);
	dataset.setCell(6,0, 'c5.gostats.com');
	dataset.setCell(6,1, 1336);
	dataset.setCell(7,0, 'c3.gostats.com');
	dataset.setCell(7,1, 695);
	dataset.setCell(8,0, 'gostats.in');
	dataset.setCell(8,1, 488);
	dataset.setCell(9,0, 'gostats.ru');
	dataset.setCell(9,1, 398);

	return dataset;
	
};

$.fn.setBarFormatChart = function(data, title){
	var id = $(this).attr('id');
	var c = document.getElementById( id );
	var table = new google.visualization.Table( c );
	var formatter = new google.visualization.TableBarFormat({width:80});
	formatter.format(data,1);
	table.draw(data, {allowHtml: true, showRowNumber: true, firstRowNumber:false, sort: 'enable', sortColumn: 1, sortAscending: false});
	return this
};


$(function(){
          
	/* Some raw data (not necessarily accurate) */
	// Dataset
	var labels = ['Visitors', 'Unique Visitor','Page View', 'Others'];
	var months = ['2004/05', '2005/06', '2006/07', '2007/08', '2008/09'];
	var data = [[165, 135, 157, 139, 324],[938, 1120, 1167, 1110, 356],[522, 599, 587, 615, 253],[998, 1268, 807, 968, 895],[854, 1245, 357, 211,553]];

	var total = totalSet();
	
	
	$('#chart_1, #chart_2, #chart_3').each(function(i){
		var header = $(container).parents('.portlet').children('.title').text();
		var container = $(this);
		
		/* Default chart */
		container.setBarFormatChart(total);
		container.append('<div class=\"title\"/>');
		$(container).children('.title').text(header);
	});

});