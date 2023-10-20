import {getWeek, getHours, range} from "../utils/util"
import React, {useContext} from "react";
import GlobalContext from "../context/GlobalContext";
import { isToday } from "../utils/util";
import dayjs from "dayjs";
import Day from "./Day";
const colStart = [
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
    'col-start-8'
]

const getColStartStyle = (col) =>{
    return colStart[col]
}
// preformatted top values for TailwindCSS
//  const topValues = [
//     'top-[1px]',
//     'top-[2px]',
//     'top-[3px]',
//     'top-[4px]',
//     'top-[5px]',
//     'top-[6px]',
//     'top-[7px]',
//     'top-[8px]',
//     'top-[9px]',
//     'top-[10px]',
//     'top-[11px]',
//     'top-[12px]',
//     'top-[13px]',
//     'top-[14px]',
//     'top-[15px]',
//     'top-[16px]',
//     'top-[17px]',
//     'top-[18px]',
//     'top-[19px]',
//     'top-[20px]',
//     'top-[21px]',
//     'top-[22px]',
//     'top-[23px]',
//     'top-[24px]',
//     'top-[25px]',
//     'top-[26px]',
//     'top-[27px]',
//     'top-[28px]',
//     'top-[29px]',
//     'top-[30px]',
//     'top-[31px]',
//     'top-[32px]',
//     'top-[33px]',
//     'top-[34px]',
//     'top-[35px]',
//     'top-[36px]',
//     'top-[37px]',
//     'top-[38px]',
//     'top-[39px]',
//     'top-[40px]',
//     'top-[41px]',
//     'top-[42px]',
//     'top-[43px]',
//     'top-[44px]',
//     'top-[45px]',
//     'top-[46px]',
//     'top-[47px]',
//     'top-[48px]',
//     'top-[49px]',
//     'top-[50px]','top-[51px]', 'top-[52px]', 'top-[53px]', 'top-[54px]', 'top-[55px]', 'top-[56px]', 'top-[57px]', 'top-[58px]', 'top-[59px]', 'top-[60px]', 'top-[61px]', 'top-[62px]', 'top-[63px]', 'top-[64px]', 'top-[65px]', 'top-[66px]', 'top-[67px]', 'top-[68px]', 'top-[69px]', 'top-[70px]', 'top-[71px]', 'top-[72px]', 'top-[73px]', 'top-[74px]', 'top-[75px]', 'top-[76px]', 'top-[77px]', 'top-[78px]', 'top-[79px]', 'top-[80px]', 'top-[81px]', 'top-[82px]', 'top-[83px]', 'top-[84px]', 'top-[85px]', 'top-[86px]', 'top-[87px]', 'top-[88px]', 'top-[89px]', 'top-[90px]', 'top-[91px]', 'top-[92px]', 'top-[93px]', 'top-[94px]', 'top-[95px]', 'top-[96px]', 'top-[97px]', 'top-[98px]', 'top-[99px]', 'top-[100px]',
//     'top-[101px]', 'top-[102px]', 'top-[103px]', 'top-[104px]', 'top-[105px]', 'top-[106px]', 'top-[107px]', 'top-[108px]', 'top-[109px]', 'top-[110px]', 'top-[111px]', 'top-[112px]', 'top-[113px]', 'top-[114px]', 'top-[115px]', 'top-[116px]', 'top-[117px]', 'top-[118px]', 'top-[119px]', 'top-[120px]', 'top-[121px]', 'top-[122px]', 'top-[123px]', 'top-[124px]', 'top-[125px]', 'top-[126px]', 'top-[127px]', 'top-[128px]', 'top-[129px]', 'top-[130px]', 'top-[131px]', 'top-[132px]', 'top-[133px]', 'top-[134px]', 'top-[135px]', 'top-[136px]', 'top-[137px]', 'top-[138px]', 'top-[139px]', 'top-[140px]', 'top-[141px]', 'top-[142px]', 'top-[143px]', 'top-[144px]', 'top-[145px]', 'top-[146px]', 'top-[147px]', 'top-[148px]', 'top-[149px]', 'top-[150px]',
//     'top-[151px]', 'top-[152px]', 'top-[153px]', 'top-[154px]', 'top-[155px]', 'top-[156px]', 'top-[157px]', 'top-[158px]', 'top-[159px]', 'top-[160px]', 'top-[161px]', 'top-[162px]', 'top-[163px]', 'top-[164px]', 'top-[165px]', 'top-[166px]', 'top-[167px]', 'top-[168px]', 'top-[169px]', 'top-[170px]', 'top-[171px]', 'top-[172px]', 'top-[173px]', 'top-[174px]', 'top-[175px]', 'top-[176px]', 'top-[177px]', 'top-[178px]', 'top-[179px]', 'top-[180px]', 'top-[181px]', 'top-[182px]', 'top-[183px]', 'top-[184px]', 'top-[185px]', 'top-[186px]', 'top-[187px]', 'top-[188px]', 'top-[189px]', 'top-[190px]', 'top-[191px]', 'top-[192px]', 'top-[193px]', 'top-[194px]', 'top-[195px]', 'top-[196px]', 'top-[197px]', 'top-[198px]', 'top-[199px]', 'top-[200px]',
//     'top-[201px]', 'top-[202px]', 'top-[203px]', 'top-[204px]', 'top-[205px]', 'top-[206px]', 'top-[207px]', 'top-[208px]', 'top-[209px]', 'top-[210px]', 'top-[211px]', 'top-[212px]', 'top-[213px]', 'top-[214px]', 'top-[215px]', 'top-[216px]', 'top-[217px]', 'top-[218px]', 'top-[219px]', 'top-[220px]', 'top-[221px]', 'top-[222px]', 'top-[223px]', 'top-[224px]', 'top-[225px]', 'top-[226px]', 'top-[227px]', 'top-[228px]', 'top-[229px]', 'top-[230px]', 'top-[231px]', 'top-[232px]', 'top-[233px]', 'top-[234px]', 'top-[235px]', 'top-[236px]', 'top-[237px]', 'top-[238px]', 'top-[239px]', 'top-[240px]', 'top-[241px]', 'top-[242px]', 'top-[243px]', 'top-[244px]', 'top-[245px]', 'top-[246px]', 'top-[247px]', 'top-[248px]', 'top-[249px]', 'top-[250px]',
//     'top-[251px]', 'top-[252px]', 'top-[253px]', 'top-[254px]', 'top-[255px]', 'top-[256px]', 'top-[257px]', 'top-[258px]', 'top-[259px]', 'top-[260px]', 'top-[261px]', 'top-[262px]', 'top-[263px]', 'top-[264px]', 'top-[265px]', 'top-[266px]', 'top-[267px]', 'top-[268px]', 'top-[269px]', 'top-[270px]', 'top-[271px]', 'top-[272px]', 'top-[273px]', 'top-[274px]', 'top-[275px]', 'top-[276px]', 'top-[277px]', 'top-[278px]', 'top-[279px]', 'top-[280px]', 'top-[281px]', 'top-[282px]', 'top-[283px]', 'top-[284px]', 'top-[285px]', 'top-[286px]', 'top-[287px]', 'top-[288px]', 'top-[289px]', 'top-[290px]', 'top-[291px]', 'top-[292px]', 'top-[293px]', 'top-[294px]', 'top-[295px]', 'top-[296px]', 'top-[297px]', 'top-[298px]', 'top-[299px]', 'top-[300px]',
//     'top-[301px]', 'top-[302px]', 'top-[303px]', 'top-[304px]', 'top-[305px]', 'top-[306px]', 'top-[307px]', 'top-[308px]', 'top-[309px]', 'top-[310px]', 'top-[311px]', 'top-[312px]', 'top-[313px]', 'top-[314px]', 'top-[315px]', 'top-[316px]', 'top-[317px]', 'top-[318px]', 'top-[319px]', 'top-[320px]', 'top-[321px]', 'top-[322px]', 'top-[323px]', 'top-[324px]', 'top-[325px]', 'top-[326px]', 'top-[327px]', 'top-[328px]', 'top-[329px]', 'top-[330px]', 'top-[331px]', 'top-[332px]', 'top-[333px]', 'top-[334px]', 'top-[335px]', 'top-[336px]', 'top-[337px]', 'top-[338px]', 'top-[339px]', 'top-[340px]', 'top-[341px]', 'top-[342px]', 'top-[343px]', 'top-[344px]', 'top-[345px]', 'top-[346px]', 'top-[347px]', 'top-[348px]', 'top-[349px]', 'top-[350px]',
//     'top-[351px]', 'top-[352px]', 'top-[353px]', 'top-[354px]', 'top-[355px]', 'top-[356px]', 'top-[357px]', 'top-[358px]', 'top-[359px]', 'top-[360px]', 'top-[361px]', 'top-[362px]', 'top-[363px]', 'top-[364px]', 'top-[365px]', 'top-[366px]', 'top-[367px]', 'top-[368px]', 'top-[369px]', 'top-[370px]', 'top-[371px]', 'top-[372px]', 'top-[373px]', 'top-[374px]', 'top-[375px]', 'top-[376px]', 'top-[377px]', 'top-[378px]', 'top-[379px]', 'top-[380px]', 'top-[381px]', 'top-[382px]', 'top-[383px]', 'top-[384px]', 'top-[385px]', 'top-[386px]', 'top-[387px]', 'top-[388px]', 'top-[389px]', 'top-[390px]', 'top-[391px]', 'top-[392px]', 'top-[393px]', 'top-[394px]', 'top-[395px]', 'top-[396px]', 'top-[397px]', 'top-[398px]', 'top-[399px]', 'top-[400px]',
//     'top-[401px]', 'top-[402px]', 'top-[403px]', 'top-[404px]', 'top-[405px]', 'top-[406px]', 'top-[407px]', 'top-[408px]', 'top-[409px]', 'top-[410px]', 'top-[411px]', 'top-[412px]', 'top-[413px]', 'top-[414px]', 'top-[415px]', 'top-[416px]', 'top-[417px]', 'top-[418px]', 'top-[419px]', 'top-[420px]', 'top-[421px]', 'top-[422px]', 'top-[423px]', 'top-[424px]', 'top-[425px]', 'top-[426px]', 'top-[427px]', 'top-[428px]', 'top-[429px]', 'top-[430px]', 'top-[431px]', 'top-[432px]', 'top-[433px]', 'top-[434px]', 'top-[435px]', 'top-[436px]', 'top-[437px]', 'top-[438px]', 'top-[439px]', 'top-[440px]', 'top-[441px]', 'top-[442px]', 'top-[443px]', 'top-[444px]', 'top-[445px]', 'top-[446px]', 'top-[447px]', 'top-[448px]', 'top-[449px]', 'top-[450px]',
//     'top-[451px]', 'top-[452px]', 'top-[453px]', 'top-[454px]', 'top-[455px]', 'top-[456px]', 'top-[457px]', 'top-[458px]', 'top-[459px]', 'top-[460px]', 'top-[461px]', 'top-[462px]', 'top-[463px]', 'top-[464px]', 'top-[465px]', 'top-[466px]', 'top-[467px]', 'top-[468px]', 'top-[469px]', 'top-[470px]', 'top-[471px]', 'top-[472px]', 'top-[473px]', 'top-[474px]', 'top-[475px]', 'top-[476px]', 'top-[477px]', 'top-[478px]', 'top-[479px]', 'top-[480px]', 'top-[481px]', 'top-[482px]', 'top-[483px]', 'top-[484px]', 'top-[485px]', 'top-[486px]', 'top-[487px]', 'top-[488px]', 'top-[489px]', 'top-[490px]', 'top-[491px]', 'top-[492px]', 'top-[493px]', 'top-[494px]', 'top-[495px]', 'top-[496px]', 'top-[497px]', 'top-[498px]', 'top-[499px]', 'top-[500px]',
//     'top-[501px]', 'top-[502px]', 'top-[503px]', 'top-[504px]', 'top-[505px]', 'top-[506px]', 'top-[507px]', 'top-[508px]', 'top-[509px]', 'top-[510px]', 'top-[511px]', 'top-[512px]', 'top-[513px]', 'top-[514px]', 'top-[515px]', 'top-[516px]', 'top-[517px]', 'top-[518px]', 'top-[519px]', 'top-[520px]', 'top-[521px]', 'top-[522px]', 'top-[523px]', 'top-[524px]', 'top-[525px]', 'top-[526px]', 'top-[527px]', 'top-[528px]', 'top-[529px]', 'top-[530px]', 'top-[531px]', 'top-[532px]', 'top-[533px]', 'top-[534px]', 'top-[535px]', 'top-[536px]', 'top-[537px]', 'top-[538px]', 'top-[539px]', 'top-[540px]', 'top-[541px]', 'top-[542px]', 'top-[543px]', 'top-[544px]', 'top-[545px]', 'top-[546px]', 'top-[547px]', 'top-[548px]', 'top-[549px]', 'top-[550px]',
//     'top-[551px]', 'top-[552px]', 'top-[553px]', 'top-[554px]', 'top-[555px]', 'top-[556px]', 'top-[557px]', 'top-[558px]', 'top-[559px]', 'top-[560px]', 'top-[561px]', 'top-[562px]', 'top-[563px]', 'top-[564px]', 'top-[565px]', 'top-[566px]', 'top-[567px]', 'top-[568px]', 'top-[569px]', 'top-[570px]', 'top-[571px]', 'top-[572px]', 'top-[573px]', 'top-[574px]', 'top-[575px]', 'top-[576px]', 'top-[577px]', 'top-[578px]', 'top-[579px]', 'top-[580px]', 'top-[581px]', 'top-[582px]', 'top-[583px]', 'top-[584px]', 'top-[585px]', 'top-[586px]', 'top-[587px]', 'top-[588px]', 'top-[589px]', 'top-[590px]', 'top-[591px]', 'top-[592px]', 'top-[593px]', 'top-[594px]', 'top-[595px]', 'top-[596px]', 'top-[597px]', 'top-[598px]', 'top-[599px]', 'top-[600px]',
//      'top-[601px]', 'top-[602px]', 'top-[603px]', 'top-[604px]', 'top-[605px]', 'top-[606px]', 'top-[607px]', 'top-[608px]', 'top-[609px]', 'top-[610px]', 'top-[611px]', 'top-[612px]', 'top-[613px]', 'top-[614px]', 'top-[615px]', 'top-[616px]', 'top-[617px]', 'top-[618px]', 'top-[619px]', 'top-[620px]', 'top-[621px]', 'top-[622px]', 'top-[623px]', 'top-[624px]', 'top-[625px]', 'top-[626px]', 'top-[627px]', 'top-[628px]', 'top-[629px]', 'top-[630px]', 'top-[631px]', 'top-[632px]', 'top-[633px]', 'top-[634px]', 'top-[635px]', 'top-[636px]', 'top-[637px]', 'top-[638px]', 'top-[639px]', 'top-[640px]', 'top-[641px]', 'top-[642px]', 'top-[643px]', 'top-[644px]', 'top-[645px]', 'top-[646px]', 'top-[647px]', 'top-[648px]', 'top-[649px]', 'top-[650px]',
//      'top-[651px]', 'top-[652px]', 'top-[653px]', 'top-[654px]', 'top-[655px]', 'top-[656px]', 'top-[657px]', 'top-[658px]', 'top-[659px]', 'top-[660px]', 'top-[661px]', 'top-[662px]', 'top-[663px]', 'top-[664px]', 'top-[665px]', 'top-[666px]', 'top-[667px]', 'top-[668px]', 'top-[669px]', 'top-[670px]', 'top-[671px]', 'top-[672px]', 'top-[673px]', 'top-[674px]', 'top-[675px]', 'top-[676px]', 'top-[677px]', 'top-[678px]', 'top-[679px]', 'top-[680px]', 'top-[681px]', 'top-[682px]', 'top-[683px]', 'top-[684px]', 'top-[685px]', 'top-[686px]', 'top-[687px]', 'top-[688px]', 'top-[689px]', 'top-[690px]', 'top-[691px]', 'top-[692px]', 'top-[693px]', 'top-[694px]', 'top-[695px]', 'top-[696px]', 'top-[697px]', 'top-[698px]', 'top-[699px]', 'top-[700px]',
//      'top-[701px]', 'top-[702px]', 'top-[703px]', 'top-[704px]', 'top-[705px]', 'top-[706px]', 'top-[707px]', 'top-[708px]', 'top-[709px]', 'top-[710px]', 'top-[711px]', 'top-[712px]', 'top-[713px]', 'top-[714px]', 'top-[715px]', 'top-[716px]', 'top-[717px]', 'top-[718px]', 'top-[719px]', 'top-[720px]', 'top-[721px]', 'top-[722px]', 'top-[723px]', 'top-[724px]', 'top-[725px]', 'top-[726px]', 'top-[727px]', 'top-[728px]', 'top-[729px]', 'top-[730px]', 'top-[731px]', 'top-[732px]', 'top-[733px]', 'top-[734px]', 'top-[735px]', 'top-[736px]', 'top-[737px]', 'top-[738px]', 'top-[739px]', 'top-[740px]', 'top-[741px]', 'top-[742px]', 'top-[743px]', 'top-[744px]', 'top-[745px]', 'top-[746px]', 'top-[747px]', 'top-[748px]', 'top-[749px]', 'top-[750px]',
//      'top-[751px]', 'top-[752px]', 'top-[753px]', 'top-[754px]', 'top-[755px]', 'top-[756px]', 'top-[757px]', 'top-[758px]', 'top-[759px]', 'top-[760px]', 'top-[761px]', 'top-[762px]', 'top-[763px]', 'top-[764px]', 'top-[765px]', 'top-[766px]', 'top-[767px]', 'top-[768px]', 'top-[769px]', 'top-[770px]', 'top-[771px]', 'top-[772px]', 'top-[773px]', 'top-[774px]', 'top-[775px]', 'top-[776px]', 'top-[777px]', 'top-[778px]', 'top-[779px]', 'top-[780px]', 'top-[781px]', 'top-[782px]', 'top-[783px]', 'top-[784px]', 'top-[785px]', 'top-[786px]', 'top-[787px]', 'top-[788px]', 'top-[789px]', 'top-[790px]', 'top-[791px]', 'top-[792px]', 'top-[793px]', 'top-[794px]', 'top-[795px]', 'top-[796px]', 'top-[797px]', 'top-[798px]', 'top-[799px]', 'top-[800px]',
//      'top-[801px]', 'top-[802px]', 'top-[803px]', 'top-[804px]', 'top-[805px]', 'top-[806px]', 'top-[807px]', 'top-[808px]', 'top-[809px]', 'top-[810px]', 'top-[811px]', 'top-[812px]', 'top-[813px]', 'top-[814px]', 'top-[815px]', 'top-[816px]', 'top-[817px]', 'top-[818px]', 'top-[819px]', 'top-[820px]', 'top-[821px]', 'top-[822px]', 'top-[823px]', 'top-[824px]', 'top-[825px]', 'top-[826px]', 'top-[827px]', 'top-[828px]', 'top-[829px]', 'top-[830px]', 'top-[831px]', 'top-[832px]', 'top-[833px]', 'top-[834px]', 'top-[835px]', 'top-[836px]', 'top-[837px]', 'top-[838px]', 'top-[839px]', 'top-[840px]', 'top-[841px]', 'top-[842px]', 'top-[843px]', 'top-[844px]', 'top-[845px]', 'top-[846px]', 'top-[847px]', 'top-[848px]', 'top-[849px]', 'top-[850px]',
//      'top-[851px]', 'top-[852px]', 'top-[853px]', 'top-[854px]', 'top-[855px]', 'top-[856px]', 'top-[857px]', 'top-[858px]', 'top-[859px]', 'top-[860px]', 'top-[861px]', 'top-[862px]', 'top-[863px]', 'top-[864px]', 'top-[865px]', 'top-[866px]', 'top-[867px]', 'top-[868px]', 'top-[869px]', 'top-[870px]', 'top-[871px]', 'top-[872px]', 'top-[873px]', 'top-[874px]', 'top-[875px]', 'top-[876px]', 'top-[877px]', 'top-[878px]', 'top-[879px]', 'top-[880px]', 'top-[881px]', 'top-[882px]', 'top-[883px]', 'top-[884px]', 'top-[885px]', 'top-[886px]', 'top-[887px]', 'top-[888px]', 'top-[889px]', 'top-[890px]', 'top-[891px]', 'top-[892px]', 'top-[893px]', 'top-[894px]', 'top-[895px]', 'top-[896px]', 'top-[897px]', 'top-[898px]', 'top-[899px]', 'top-[900px]',
//      'top-[901px]', 'top-[902px]', 'top-[903px]', 'top-[904px]', 'top-[905px]', 'top-[906px]', 'top-[907px]', 'top-[908px]', 'top-[909px]', 'top-[910px]', 'top-[911px]', 'top-[912px]', 'top-[913px]', 'top-[914px]', 'top-[915px]', 'top-[916px]', 'top-[917px]', 'top-[918px]', 'top-[919px]', 'top-[920px]', 'top-[921px]', 'top-[922px]', 'top-[923px]', 'top-[924px]', 'top-[925px]', 'top-[926px]', 'top-[927px]', 'top-[928px]', 'top-[929px]', 'top-[930px]', 'top-[931px]', 'top-[932px]', 'top-[933px]', 'top-[934px]', 'top-[935px]', 'top-[936px]', 'top-[937px]', 'top-[938px]', 'top-[939px]', 'top-[940px]', 'top-[941px]', 'top-[942px]', 'top-[943px]', 'top-[944px]', 'top-[945px]', 'top-[946px]', 'top-[947px]', 'top-[948px]', 'top-[949px]', 'top-[950px]'
//  ];



// const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const hourNow = dayjs().hour()
const minutesNow = dayjs().minute()
const hourHeight = 36
const hoursTopMargin = 62



// const top = Math.floor(hourNow * hourHeight + hoursTopMargin +  minutesNow/2 + hourHeight/2)

const top = Math.floor(hourNow * hourHeight + hoursTopMargin + (hourHeight*minutesNow/60) + hourHeight/2 )

console.log(hourNow, minutesNow, top)
const HourLine = ({ children}) => {
    return(
        <div className={`absolute w-full  border-[2px] border-gray-400 top-[${top}px]`} >
            {children}
        </div>
    )
}

const Week = ({week: currentWeek}) => {
    const {
        minionSelectedDay
    } = useContext(GlobalContext)

    const week = getWeek(minionSelectedDay)
    // const hours = getHours()

    console.log("Week: ",week[0].day())

    return (
      <div className="grid grid-cols-8 w-full p-4 border-gray-200 border-2 me-1.5 relative">
              <div className="grid-rows-24 mt-12">
                  {range(24).map((hour, i)=>
                      <span key={i} className="flex items-center justify-center h-9">
                          {hour}

                      </span>
                  )}
              </div>

          {week.map((day, i) => (
              <React.Fragment className="flex flex-row" key={i}>
              {/*<header className={` ${getColStartStyle(i+1)} flex flex-col items-center border-gray-200 border-l-2 border-l-gray-200`} key={i}>*/}
              {/*    <p className={`flex justify-center text-sm mb-1`}>{day.format('ddd').toUpperCase()}</p>*/}

              {/*    <div className={`flex items-center justify-center h-8 w-8  */}
              {/*    ${isToday({day}) ? 'bg-blue-500 rounded-full text-white font-bold': ''}*/}
              {/*        `}>*/}
              {/*        {day.format('DD')}*/}
              {/*    </div>*/}
              {/*</header>*/}
                <Day day={day} colIndex={i}  key={i}></Day>
              </React.Fragment>
          ))}

          <HourLine />

      </div>
    )
}

export default Week;