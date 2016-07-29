(function () {
  'use strict';

  var template = "\r\n\
              :,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,:,::,:\r\n\
              :BBMBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBMBB\r\n\
              ,Biiir;riririr;riririr;rir;rir;r;r;r;r;r;r;r;r;r;r;r;r;r;rir;r;r;r;r;r;r;r;riririr;r;iJB\r\n\
              ,B7r7777v77rv7777777v77777vr77v777v7777777v7vrv7777r77v77r77777777v7vrv777777777v7v77iUB\r\n\
              .Brr7L7v7L777v777v7v7v7777777v777v7v7L7v7L7v777v7v7L7v7v7v7v7v7L7v777v7v7v7v7v7v7L777ruB\r\n\
              ,B7rv7v7v7v7v7L7v7v7v7v7L7v7v7v7v7L7v7v7v7v7v7v7v7v7v7L7v7v7v7v7v7v777v7v7L7v7v7v777viUB\r\n\
              .Brr7v7v7v7v7v7v7v77r7r7r777r777r7r7r7r777r777r77777777777r777r7r7r777777v7v7v7v777v7rUB\r\n\
              ,B7r77v7v777v777v77;iiiiiiiiiiiiiiiii:iiiiiii:iiiiiiiiiiiiiii:iii:ii;r77v7v7v7v7v7v77;UB\r\n\
              .Brr7v777v7v7v7v7JFOBBMG0GE8EGE8Z8E8E8ZGE8Z8EOZ8EOZ8EOZOE8EGE8EZN8MBMZ1Lrv7v7v7v7v7v7rUB\r\n\
              ,B7rv7v777v7vrv7vr77U0BBBZZ0G08EGEGEGE8ZGE8EGE8E8ZGEGZ8ZGE8EG0GOBBBkJ777777r77L7v7v7v;2B\r\n\
              ,Br77v7v7v777Lr77777iiiLNBMP5PkXkPSXSPSPSPSXSXSXkPSXkPSPSXSX50BB57:i;77v77rYr77L7v7v7ruB\r\n\
              ,B7r77v7v7v77O7i77v77r7iir0BOFXSPSqXqkPkPkPXPXPkqkPkPkPkPSXSBBFiii77v7v77iUE;7v7v7v77i2B\r\n\
              ,Br77v7v7v77iBG:;v7v7v77rr:LBBSPkPkPkPkPSqXPXPXqkPXPXPkPSkXBZr:rrv7v7L77iiBGi77v7v7v7ruB\r\n\
              ,B7r777777vriMB1:r7777v7777iiGBSXkPkPkPkqkqkPXqXPXPkPkPSkqB1ii77v777v77;iZBSi7L7v7L77i2B\r\n\
              .Brr7v7v7v77iMMB1:i77L7L7v77;iEBFPSPkPkPSPkPSPXqSPXPkqkkPBU:r77L7v7777iiZBBP:7777v7L7rUB\r\n\
              ,B7r77v777vriOMkBqii7777v7v77iiMB5XSPkPXPSPkqkPSPSqkqkPFBq:r77v777777:7MB5Bkir77v7v7vi2B\r\n\
              .Br77v7L7L77iB8SkBBJ:;r7777777i7BZFPkPkPXPkPXqkPXPkPSqFMBii7777v77rii5BM5SBP:77v7v7v7ruB\r\n\
              ,B7r77v777vriMMFkF8BOLi:rr77777:PBXSPkPSPkqSPkqkPkPkqSXBu:77777r;:;uBBEFXFBkir77v7v77i2B\r\n\
              .Brr777v7777iBOkSPSPOBMk7i:iirriiBqXkqkPkqkPSXkPSqkqkXZBi;rrii:rLqBBZXSPSXBP:77v7v7v7ruB\r\n\
              ,B7r77L777LriMMFXXPkXSZMBM02Yri::qBXGGMMMEqkqSNGMMMGZXB1,:r7J58BBM0SXkqkXFBXi7v7L7v77i2B\r\n\
              .Brr7v777v77iB8kkqkXkXSXkEGBBBBBMBBBBBMMMBBBqBBBMMMBBBBBMBBBBBG0FXSPkPkPSXBq:7777v7v7ruB\r\n\
              ,B7rv7v7v7vriMM5PSPkXFkFXSX1MMrBi..       .MBU        ..SBrBN5kkXSXkXSPkP5Bki7v7L7v7vi1B\r\n\
              .Brr7v7v7777iMOkkqkX5qNP2F1FBY B           .B           ;B BN51S1S5kSXkPkkBq:7777v7v7ruB\r\n\
              ,B7rv7v777LriMMFPkPSOOGO80ZEBJ B           ,B           YB BB0ZEG080PSqSPFBXi7L777v7vi2B\r\n\
              .Brr7L7L7777iBOkkqFEBMNBBBBBBu B           :B           YB BBBBBBBBBqkkPkkBq:77v7L7v7rUB\r\n\
              ,B7r7777v7vriMMFPkXF0OZGEN0qBj B           :B           jB BBNE0Z0ZqPSPkP5Bki7v7v7v77;1B\r\n\
              .Br77L7v7v77iM8kkqSP5XXk1F1FBU B           :B           YB BZ51S5k5kkPkPkkBqi77v7L7v7rUB\r\n\
              ,B7rv7v7v7vriMM5PSPkX1k5k5k5Bu B           :B           jB B85XFkFkSPSPXPFBkirL7v7v7vi2B\r\n\
              .Brr7v7v7777:BOkSPSkk8EZFXFkBU B           :B           YB BGSSXFXFkFXkqkXBq:77v7L7L7ruB\r\n\
              ,B7r77v7v7vriMM5XkXPBMEMBMBMBj B           :B           YB BBMBMBMBMqSPkXFBXi7v7L7v7v;2B\r\n\
              .Brr7v7v7v77iB8kkqSPMMNMMBMBBu B           .B           7B BBBMBMBMBXPXqSkBP:7777v7v7ruB\r\n\
              ,B7r77L7v7vriMMFqXqFkNGqk5S5BY BYrL7LvL7L7:iB rLL7YvYvLrEq B81kFXFk5XkPXPFBXi7v7L7v77iUB\r\n\
              .B7r7v7v7L77iB8kkPSPSSFSSXFFMZ ir7r7r7r77irjjUv777r7r7r7;:.BNFFkFXSXkPkPSXBP:77v7v7v7rUB\r\n\
              .BL;v7v7L7LriMMFPkqkPkXFXqOMBBBBBBBBBBBBBGU7vLFMBBBBBBBMBBBBBO8XXFXkXXqkXSBXirL7v7v77iPB\r\n\
               Bur777v7v77iMOkSPSXSP0BBB0FL7;i,5BkkqkPX0GMMMENkPkPkkBJ,i;7JXZBBMqkSPSPSkBP:77v7v7v7iMB\r\n\
               BMi77v777vriMM5PkXkOBBSYii:;;7iiBGFPkPkPkqkPSPXPkPSqFMGiirii:i;jqBBZSXkPFBki7v777777iBj\r\n\
               JB;r77v7L77iM8kkS0B8jiiirr7777ijBkXkPkPSqkqkXSqkPSPSXXB7irv77rriii5BBqXSkBP:77v7v7v;LB.\r\n\
                BJrrv7v7vriMM1kBBYii7777v7v7riB8kSqkqXPkqkqkPkPSPkPSkB8:77v7777rr:i5B8kFBki7v7v7vri8B\r\n\
                qBi77v7L77iMGXB8iir77v7L7v77:qBXkPkqSPkPkPSPSPkPkPkqSqBJ:77v7v7777;:rBMFBP:77L7L7rrB:\r\n\
                 B1i7777vriMBBX:r7v7v7v7777:UBNFPkqSqkqkPkqkqkqkPkPXPFMBri77v7L7L77riiMBBkir77v77:BB\r\n\
                 JBr;77v77iMBX:rrv777v7v7r:uBZ5XSPkqkqkPSqkqkPkPSPkPSXFMB7:77v7v7L7vr;:MBPi77v77ijB.\r\n\
                  BBirv7vriBM:r7v7v7v77r;:SBZFPkPkPkqkPkqXPkPkPkPkPkPSP5MBY:rr77v7v77r;iBNirL7vrrBU\r\n\
                   B0irv77rB7;777777r7ii7MB0FPkPkqXPXqkqkqkqkqkPkqkPkqSP5GBN;i;7777v7vriU8i77vriBB\r\n\
                   .BSi77r7Lrrv77r7iiiL0B8XSXSXkPkPSPSPkqkqkPkqSqkPkPkPSPSPMBF7:i;77v7777Y777riBB\r\n\
                    ,BFir7777v77i;iv1MBMkkkXkqSXkqSPkqSPkPkqSXkPkPkPSPkPSPSXPBBGJrirr77vr777riBB\r\n\
                     ,BPir77v77v5NBBBBBMBBBBBMBBBBBBBMBMBBBMBBBMBBBBBBBBBMBBBMBBBBBXU777v77;;BB\r\n\
  qBBMMBBBBBBBB,       BM;r77v7YJUYL7v7v7v7L7L7L7L7v7v7L7v7v7L7v7v7L7v7v7v7L7v7v7YYUYLrv77i7BB       vBBBBBBMBMBBBr\r\n\
  BBBB8GMOM8MGBBi       BB7i77vrrrririr;ririririririr;rir;r;rir;riririririririririr;rr777iUBq       1BBZM8M8MZOBBBL\r\n\
  O0rBBPFqXPkkMBBY       XBFi77v7v7v777v7777777v77777v7v7v7v77777v7v777v777v7v77777v7v7riMBr       OBBOSSqXXFGBMiB7\r\n\
  M8,iGBMFkSXFBXEBP       :BBr;r77L777v7L7v7L777v7v777L7L777v777L7v777v7L77777L777v77riYBB        BBkGM5XSSSBBS::B7\r\n\
  OM:i:YMBqkSSMq50BM        PBX;;7rv7v7v7L777v7v7L7v777v777v777v7v7v7v77777v7v7L7vr7i7MB7        BBX188F5k8B07:riB7\r\n\
  MOi;MFvUBBNUBPSSqBB        .BB1irrv777v777v777v777v7v7v7v7v7v7v7L7v7v7L7v7v7v7vrriNBG        ,BBXkFGM1GBMLUjrr;B7\r\n\
  MM:iN217:5BBBq5PkPBB         rBBJ;r77v7v7v7L7v7v777L777L7L7v777v7v777v7v7v7777irkBB.        iBMkSX28BBOJ7FUL;riB7\r\n\
  BB:i1UXi;uu1BB0SkkkBB,         7BB5irr77v7v7v7v777v7L7v7L777v7v7v7v7L777777rrrNBB:         YBGXSkSGB8Jr,GX1vri7BY\r\n\
  BBj1YPS8PjkiUMBEX5XMBi          7BBX7i7777v7L7v7v777L7v7v7v7v7v7v7v7v777riL8BM:          SB0kFq8BZYY5BYNSLUiEBP\r\n\
  rBBSPYOi:2vv770MMqSGB;           :MBBjr;rr77v7v7L7v7v7v7v7v7v7v77777ri71BBX.           PBXX0BOXi:NUrOiONU5BB.\r\n\
      YB8iJq:ri82J1j5MB8MB.            jBBOYri777777v7v7L7L7v7v7777rri7UBBBr             LB0MBGJUSFiBjYBUrFBBi\r\n\
       1BMXXBYq2qNL5iLFBBB               ,FBBMj7irr7777v777v77r7rri75BBBJ.               BBEUr:Su7B1B7,vSBBr\r\n\
          uBBU.EUP0UJiS5:J8B5:               ,UBBBPJrr;rr7r7r7irrUZBBMv.               rNBkUjq752::8YN:5BB;\r\n\
            LBGJiFSru:8Bv:F7MBBN7                ;NBBB81Yrr7JSMBBM5:               ,uGBBFr0j7MY8kiFL:YBM:\r\n\
              BBqUu5JiGSNLMr5qkZMBBNr.               iuMBBBBBEL:               ,LOBB0EU::7BUY80v8FYUOBP\r\n\
              BBGMGFF:qLvMMi:SBFLL5FBBBZY:                ,                :2OBBBFv:rBBj:7B77FY,vkMMNBU\r\n\
              vBZkXMMG27.PBi:kM::MG::0SUOBBBNj:                      .i1GBBBE107irri0PjB7rB2jjUMB8kXBB.\r\n\
               LBBBXX0MMZju::FB:iGG.SBM;ii7YX8BM80PL            .U00MBB0FLrii7B7r;;rBPY28iJ2EMMqXqBBB,\r\n\
                 rMBBGSq0BBBG05i:MN7BUNO:7rri::7SBBB            rBBBUi,:irr7i7BriLrqN:;FMBBMNXkMBBq:\r\n\
                    5BBB0qB iqBBZPUESr1BY:i:72MBBqEB            iBPEBBZYr:;rr7BkPN2PMBBF.;BFZBBBY\r\n\
                      :GBBB    :UOBBNj:UkiYGBBZP5XNB            :BkkFNGBBNLi:rPOMBBZ7.   rBBBk.\r\n\
                         7B.       ,jEBZGBBM0FXSXSEB            :BPFkFkFZBBBZMMS7.       7B:\r\n\
                                       rBFqMMBMB8G8B            :B0O8BMBMOXEB\r\n\
                                       ,B:ii77u1XqOBOZZPqSXFXXENMBZXkUJ7ri:7B\r\n\
                                       iBrr7rriiiii;7L1kjF2UkO01;i:iiiirr7iJB\r\n\
                                       :Bi77v777777ri7BB7:iXMU5BPi7rv7v7vrrYB\r\n\
                                       ;Bi;7rv7v77rriBj1M:jB:::i77777v7v77iYB\r\n\
                                       rBPu7rirr7r7iGBkXBj7BL:iP8i7r7rrir72BB\r\n\
                                        :18BBMq5YLr7O7::LB:JGPq87;7YjS0BBBEj.\r\n\
                                            .iUqMBBBM8MZEG8PEMMZMBBMMkJ:.\r\n\
                                                    .,:iiii;::,,.\r\n";

  angular
      .module('uqlSignature', [])
      .component('uqlibrarySignature', {
        template: '',
        restrict: 'E',
        controller: SignatureController,
        controllerAs: 'vm'
      });

  /** @ngInject **/
  function SignatureController($document) {
    // Add console message
    var styles = "background-color: #49075e; color: #FFF";
    var message = '%c                                                                          \r\n';
    message += '    _    _  ____      _      _____ ____  _____            _______     __  \r\n';
    message += '   | |  | |/ __ \\    | |    |_   _|  _ \\|  __ \\     /\\   |  __ \\ \\   / /  \r\n';
    message += '   | |  | | |  | |   | |      | | | |_) | |__) |   /  \\  | |__) \\ \\_/ /   \r\n';
    message += '   | |  | | |  | |   | |      | | |  _ <|  _  /   / /\\ \\ |  _  / \\   /    \r\n';
    message += '   | |__| | |__| |   | |____ _| |_| |_) | | \\ \\  / ____ \\| | \\ \\  | |     \r\n';
    message += '    \\____/ \\___\\_\\   |______|_____|____/|_|  \\_\\/_/    \\_\\_|  \\_\\ |_|     \r\n';
    message += '                                                                          \r\n';
    message += '                                                                          \r\n';
    console.log(message, styles);

    // Add HTML comment
    var comment = document.createComment(template);
    var body = $document[0].querySelector('body');
    body.insertBefore(comment, body.firstChild);
  }

})();
