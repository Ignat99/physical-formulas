% ------------ 2D Meander finder -------------
% Script: neighbours.m
% Authors: Amir A.M.Galehdar 2145033
% Version: 5 , 14-May-2008

function res = neighbours(n)
% function res = neighbours(n)
% The points in an n by n square are labelled 1,2, ...n^2 - across rows
% first
% input
% 	n = size of square
% output
% 	res = n^2 x n^2 matrix giving boolean values for neighbours
% 	- if p and q are neighbours res(p,q) = res*q,p) = 1
% label rows as 0,1, ..n-1 and columns in same way
% point = n*r + c + 1

    u = 1:n; [coln, row] = meshgrid(u,u);
    row = row-1;

    % neighbouring points above
     row1 = row-1; row1(1,:) = Inf;
     coln1 = coln; p_above = n*(row1) + coln1;
     p_above = p_above'; p_above = p_above(:);

    % neighbouring points below
     row1 = row+1; row1(n,:) = Inf;
     coln1 = coln; p_below = n*(row1) + coln1;
     p_below = p_below'; p_below = p_below(:);

    % neighbouring points to the left
     row1 = row; coln1 = coln-1; coln1(:,1) = Inf;
     p_left = n*(row1) + coln1;
     p_left = p_left'; p_left = p_left(:);

    % neighbouring points to the right
     row1 = row; coln1 = coln+1; coln1(:,n) = Inf;
     p_right = n*(row1) + coln1;
     p_right = p_right'; p_right = p_right(:);

    % print p_left, p-right etc
    fprintf('left, right. above, below \n');
    disp([p_left p_right p_above p_below]);

    % combine these columns into matrix res - first intialize res
    res = zeros(n^2, n^2);

    for p = 1:n^2

	if isfinite(p_left(p))
	    res(p, p_left(p)) = 1;
	end
	
	if isfinite(p_right(p))
	    res(p, p_right(p)) = 1;
	end
	
	if isfinite(p_above(p))
	    res(p, p_above(p)) = 1;
	end
	
	if isfinite(p_below(p))
	    res(p, p_below(p)) = 1;
	end
   end

return

