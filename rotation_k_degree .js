<script>
	const appControllers = {
		rows: 0,
		cols: 0,
		gridData: [],
		initGridData: function(_array){
			var self = this;
			self.gridData.push(..._array);
			self.rows = _array.length;
			self.cols = _array[0].length;
			return self;
		},
		
		rotate_k_degree: function(n_dim,m_dim,_array){
			var x = [];
			for(var i = 0; i < n_dim ; i++){
				 x[i] = []; // initialize the first element is empty;
				for(var j = 0; j < m_dim; j++){
					let default_value =  _array[n_dim - j - 1][i];
					x[i][j] = default_value;
				}
			}
			return x;
		}
	}

	const grid = [
		   [0, 16,255],
		   [8,128, 32],
		   [0, 0,   0]
		];
		
	  
	var app = appControllers.initGridData(grid);
	console.log('before rotation 90 degree: \n ');
	console.log(app.gridData);

	console.log('after rotation 90 degree: \n ');
	// rotation k = 1 with 90 degree 
	var k = 2;
	var iCount = 0;
	do {
		var rotate_matrix = appControllers.rotate_k_degree(app.rows,app.cols,app.gridData);
		app.gridData = rotate_matrix;
		console.log('with k = : ' + iCount + ' time\n ');
		console.log(app.gridData);
		iCount++;
	} while(k > iCount);
</script>

