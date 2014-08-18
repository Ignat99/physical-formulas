% ------------ 2D Meander Solver -------------
% Script: Meander2D.m
% Authors: Amir A.M.Galehdar 2145033
% Version: 5 , 14-May-2008

%load neighbours.m
%load Meander.m

function Results=Meander2D(B)
fre=[.3:.001:.5];
%B=[25 20 15 14 13 18 19 24 23 22 21 16 11 6 1 2 3 4 5 10 9 8 7 12 17];
%if ( (B(1)==5) | (B(1)==10) | (B(1)==15) | (B(1)==20) | (B(1)==25) )
if (B(1)==25) 
    C(1:25)=[25 20 15 10 5 24 19 14 9 4 23 18 13 8 3 22 17 12 7 2 21 16 11 6 1];
end
%if ((B(1)==6)|(B(1)==11)|(B(1)==16)|(B(1)==21))
%    C(1:25)=[21 16 11 6 1 22 17 12 7 2 23 18 13 8 3 24 19 14 9 4 25 20 15 10 5];
%end
%if ((B(1)==21)|(B(1)==22)|(B(1)==23)|(B(1)==24)|(B(1)==25))
%    C(1:25)=[25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1];
%end
%if ((B(1)==1)|(B(1)==2)|(B(1)==3)|(B(1)==4))
%    C(1:25)=[1:25];
%end
A=[0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4;0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4];
Ts=1;
m=1;
g=1;

for i=1:length(B)
     a=B(i);
     [d]=find(C(:)==a);
     x1=A(1,d);
     y1=A(2,d);
    out(1,m)=x1;
    out(2,m)=y1;
    m=m+1;
end
% figure(1)
% plot(out(1,:),out(2,:),'LineWidth',3)
% grid on
% axis square

for i=0:length(out)-1
    Meander(1,g)=(out(1,length(out)-i));
    Meander(2,g)=(out(2,length(out)-i));
    g=g+1;
end

for i=1:length(out)
    Meander(1,g)=(-out(1,i)-1);
    Meander(2,g)=(out(2,i));
    g=g+1;
end
% figure(2)
% plot(Meander(1,:),Meander(2,:),'LineWidth',3)
% grid on

G=[1:g-2];
for i=1:length(G)
    if i==(g-1)/2
	seg(i)=3;
    else
	seg(i)=2;
    end
end
for i=1:length(G)
    Meand1(1,i)=G(i);% number of element in structure (fist, second, ...)
    Meand1(2,i)=seg(i);% number of segments that the element divided to
    Meand1(3,i)=Meander(1,i);% x cordinate of the start of element
    Meand1(4,i)=Meander(2,i);% y cordinate of the start of element
    Meand1(5,i)=0;
    Meand1(6,i)=Meander(1,i+1);% x cordinate of the end of element
    Meand1(7,i)=Meander(2,i+1);% y cordinate of the end of element
    Meand1(8,i)=0;
    Meand1(9,i)=0.05;% elements radius
end
for i=1:length(G)
    Meand2(1,i)=5;
    Meand2(2,i)=G(i);
    Meand2(3,i)=1;
    Meand2(4,i)=seg(i);
    Meand2(5,i)=5.8E7;
end

%fid = fopen('D:\2D\exp.txt','w');
fid = fopen('exp.txt','w');
fprintf(fid,'CM\n');
fprintf(fid,'CE\n');
fprintf(fid,'GW %d %d %d %d %d %d %d %d %d\n',Meand1);
fprintf(fid,'GS 0 0 .01\n');
fprintf(fid,'GE 0\n');
fprintf(fid,'EX 0 25 2 0 1 0\n');
fprintf(fid,'LD %d %d %d %d %d\n',Meand2);
fprintf(fid,'FR	0	%d	0	0	%d	%d\n',length(fre),1000*fre(1),1000*abs(fre(1)-fre(2)));
fprintf(fid,'RP 0 1 360 1000 89 0 1 1\n');
fprintf(fid,'FR	0	%d	0	0	%d	%d\n',length(fre),1000*fre(1),1000*abs(fre(1)-fre(2)));
fprintf(fid,'RP 0 181 1 1000 -90 0 1 1\n');
fprintf(fid,'EN');
fclose(fid);
%! D:\nec32.EXE D:\2D\exp.txt D:\2D\exp.out D:\2D\exp.tin

%fid=fopen('D:\2D\exp.nou');
fid=fopen('exp.nou');
str=('ANTENNA INPUT PARAMETERS');
neg=(' ');
len_str=length(str);
count=0;
got1=[];
got2=[];
numfr=length(fre);% chaged by the number of Frequency
flag=1;
while 1
    tline = fgetl(fid);
    
    if b==numfr, break, end
    if flag==2, break, end
      if ~ischar(tline), break, end
	count=count+1;
%=========================================================================
count3=[];
for(t=1:length(tline)-length(str)+1)
count4=0;
for(count2=1:length(str))
    if(str(count2)==tline(t+count2-1))
	count4=count4+1;
    end
end
%=========================================================================
count3=[count3 count4];
if(count4==len_str)
    b=b+1;
    tline1=fgetl(fid);
    tline1=fgetl(fid);
    tline1=fgetl(fid);
    ant_in(b,:)=fgetl(fid);
    Real(b,:)=ant_in(b,62:72);
    if ant_in(b,73)==neg
	flag=flag+1;
	if flag==2;
	    RESO=fre(b);
	    fre=b;
	    for i=1:118
		tline1=fgetl(fid);
	    end
	    tline1=fgetl(fid);
	    ef=tline1(61:65);
	end
    end
    
end
end

end
fclose(fid);
Efficiency=sscanf(ef,'%f');
REA=sscanf(Real(fre,:),'%f');
Results=[RESO,Efficiency,REA];

