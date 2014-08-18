% ------------ 2D Meander finder -------------
% Script: Meander.m	
% Authors: Amir A.M.Galehdar 2145033
% Version: 5 , 14-May-2008


pkg load geometry

% create meanders on n by n grid

clear all
n = 5;
z = zeros(1,n^2);
u = ones(1,n^2);
nlist = neighbours(n);

% initialize current list - each row will build up a paty starting with [1,
% 2]
curr_list = z; curr_list(1:2) = 1:2;
curr_length = 2;

% now increase curr_length
while curr_length < n^2
    next_list = [];
    
    [p,q] = size(curr_list);
    
    % work through current paths
    for g = 1:p
    	curr_path = curr_list(g,:);
	temp = curr_path;

	% find endpoint of this path and points not visited
	endpt = curr_path(curr_length);
	nn = nlist(endpt, :);
	index = find(curr_path == 0);
	
	% which points are available
	available = u;
	available(curr_path(1:curr_length)) = 0;
	temp = available.*nn;
	index = find(temp>0);

	%fprintf('Path, neighbours and available are \n');
	%disp([curr_path; nn; available]);
	% work through points listed in temp - they are next steps
	for h = 1:length(index)
	    temp = curr_path;
	    temp(curr_length+1) = index(h);
	    next_list = [ next_list; temp];
	end;
    end;
    
    % now update curr_list and curr_length
    curr_list = next_list;
    curr_length = curr_length+1;

    % report
    fprintf('\n Current length is %g \n', curr_length);
    disp(curr_list);
end

return

