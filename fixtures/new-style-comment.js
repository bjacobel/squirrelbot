/* eslint-disable max-len */

const raw =
  "recipient=github%40mailgun.bjacobel.com&sender=bounces%2B848413-9e13-github%3Dmailgun.bjacobel.com%40sgmail.github.com&subject=Re%3A+%5Bbjacobel%2Fsquirrelbot%5D+Test+2+%28%233%29&from=Brian+Jacobel+%3Cnotifications%40github.com%3E&X-Mailgun-Incoming=Yes&X-Envelope-From=%3Cbounces%2B848413-9e13-github%3Dmailgun.bjacobel.com%40sgmail.github.com%3E&Received=from+o1.sgmail.github.com+%28o1.sgmail.github.com+%5B192.254.114.176%5D%29+by+mxa.mailgun.org+with+ESMTP+id+57ace87a.7f61a45e17b0-in3%3B+Thu%2C+11+Aug+2016+21%3A04%3A58+-0000+%28UTC%29&Dkim-Signature=v%3D1%3B+a%3Drsa-sha1%3B+c%3Drelaxed%3B+d%3Dgithub.com%3B+%09h%3Dfrom%3Areply-to%3Ato%3Acc%3Ain-reply-to%3Areferences%3Asubject%3Amime-version%3Acontent-type%3Acontent-transfer-encoding%3Alist-id%3Alist-archive%3Alist-post%3Alist-unsubscribe%3B+%09s%3Ds20150108%3B+bh%3DIECLxZwEWpUDu%2BKyGNtSb58Ybn0%3D%3B+b%3DaAwIZ%2BijodDZNhCo%09AUFeliCZhTCSI3HkTtBKbdYvORRKhu9WG%2BW0S3RxfpvshE5jO1ZiaJIhH4SqTFJX%09SyLjFTVKTac0NCEVmD9C%2FfoUpLTUCdtYdX4jaMH2VuoWz5PdnCufyB3sqEyfZNu8%09EhhiwE%2BHa2mIbRhvuVegSjrjHAI%3D&Received=by+filter0473p1mdw1.sendgrid.net+with+SMTP+id+filter0473p1mdw1.26069.57ACE8664F++++++++2016-08-11+21%3A04%3A38.948403623+%2B0000+UTC&Received=from+github-smtp2a-ext-cp1-prd.iad.github.net+%28github-smtp2a-ext-cp1-prd.iad.github.net+%5B192.30.253.16%5D%29%09by+ismtpd0001p1iad1.sendgrid.net+%28SG%29+with+ESMTP+id+WLtZB4s2TGOGkKOjgFmq9w%09for+%3Cgithub%40mailgun.bjacobel.com%3E%3B+Thu%2C+11+Aug+2016+21%3A04%3A38.885+%2B0000+%28UTC%29&Date=Thu%2C+11+Aug+2016+14%3A04%3A38+-0700&From=Brian+Jacobel+%3Cnotifications%40github.com%3E&Reply-To=bjacobel%2Fsquirrelbot+%3Creply%2B00063857f9ae860ac96a3959d3e1cdc7b8ed04ff305b3e1792cf0000000113c4aa6692a170ce0470d2a5%40reply.github.com%3E&To=bjacobel%2Fsquirrelbot+%3Csquirrelbot%40noreply.github.com%3E&Cc=Brian+Jacobel+%3Cgithub%40mailgun.bjacobel.com%3E%2C++Your+activity+%3Cyour_activity%40noreply.github.com%3E&Message-Id=%3Cbjacobel%2Fsquirrelbot%2Fpull%2F3%2Fr74502821%40github.com%3E&In-Reply-To=%3Cbjacobel%2Fsquirrelbot%2Fpull%2F3%40github.com%3E&References=%3Cbjacobel%2Fsquirrelbot%2Fpull%2F3%40github.com%3E&Subject=Re%3A+%5Bbjacobel%2Fsquirrelbot%5D+Test+2+%28%233%29&Mime-Version=1.0&Content-Type=multipart%2Falternative%3B+boundary%3D%22--%3D%3D_mimepart_57ace866ba22c_4ef03faf391f129c5462e0%22%3B+charset%3D%22UTF-8%22&Content-Transfer-Encoding=7bit&Precedence=list&X-Github-Sender=bjacobel&X-Github-Recipient=bjacobel&X-Github-Reason=your_activity&List-Id=bjacobel%2Fsquirrelbot+%3Csquirrelbot.bjacobel.github.com%3E&List-Archive=https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot&List-Post=%3Cmailto%3Areply%2B00063857f9ae860ac96a3959d3e1cdc7b8ed04ff305b3e1792cf0000000113c4aa6692a170ce0470d2a5%40reply.github.com%3E&List-Unsubscribe=%3Cmailto%3Aunsub%2B00063857f9ae860ac96a3959d3e1cdc7b8ed04ff305b3e1792cf0000000113c4aa6692a170ce0470d2a5%40reply.github.com%3E%2C+%3Chttps%3A%2F%2Fgithub.com%2Fnotifications%2Funsubscribe%2FAAY4V17-Ud0ZJN6TX4_qtFkJ3K1Pl2CIks5qe45mgaJpZM4JZ8Mj%3E&X-Auto-Response-Suppress=All&X-Github-Recipient-Address=github%40mailgun.bjacobel.com&X-Sg-Eid=JO%2FNHJnr0JhM52d3aYKKc3%2FH2mMYT1KLf41bmjjwO0b919K3V%2BgXst7TJT7X7MGRRAnzBRvGg0py7e+%2BqMvbu7ZNSExr85EJFslUOdhbmDBIdmW74mdXh%2FlMawoGieEWC3JD6gsXfrBbN6wz42bKZM02BT1uy+2TTwv0rDybw5acr%2FeV5G2wnLgtwD1W3esHJNMTOpbeBHIwr3xOMWgbxDRHuFjH%2BjjSpp3HS%2F94zH4f+U%3D&message-headers=%5B%5B%22X-Mailgun-Incoming%22%2C+%22Yes%22%5D%2C+%5B%22X-Envelope-From%22%2C+%22%3Cbounces%2B848413-9e13-github%3Dmailgun.bjacobel.com%40sgmail.github.com%3E%22%5D%2C+%5B%22Received%22%2C+%22from+o1.sgmail.github.com+%28o1.sgmail.github.com+%5B192.254.114.176%5D%29+by+mxa.mailgun.org+with+ESMTP+id+57ace87a.7f61a45e17b0-in3%3B+Thu%2C+11+Aug+2016+21%3A04%3A58+-0000+%28UTC%29%22%5D%2C+%5B%22Dkim-Signature%22%2C+%22v%3D1%3B+a%3Drsa-sha1%3B+c%3Drelaxed%3B+d%3Dgithub.com%3B+%5Cth%3Dfrom%3Areply-to%3Ato%3Acc%3Ain-reply-to%3Areferences%3Asubject%3Amime-version%3Acontent-type%3Acontent-transfer-encoding%3Alist-id%3Alist-archive%3Alist-post%3Alist-unsubscribe%3B+%5Cts%3Ds20150108%3B+bh%3DIECLxZwEWpUDu%2BKyGNtSb58Ybn0%3D%3B+b%3DaAwIZ%2BijodDZNhCo%5CtAUFeliCZhTCSI3HkTtBKbdYvORRKhu9WG%2BW0S3RxfpvshE5jO1ZiaJIhH4SqTFJX%5CtSyLjFTVKTac0NCEVmD9C%2FfoUpLTUCdtYdX4jaMH2VuoWz5PdnCufyB3sqEyfZNu8%5CtEhhiwE%2BHa2mIbRhvuVegSjrjHAI%3D%22%5D%2C+%5B%22Received%22%2C+%22by+filter0473p1mdw1.sendgrid.net+with+SMTP+id+filter0473p1mdw1.26069.57ACE8664F++++++++2016-08-11+21%3A04%3A38.948403623+%2B0000+UTC%22%5D%2C+%5B%22Received%22%2C+%22from+github-smtp2a-ext-cp1-prd.iad.github.net+%28github-smtp2a-ext-cp1-prd.iad.github.net+%5B192.30.253.16%5D%29%5Ctby+ismtpd0001p1iad1.sendgrid.net+%28SG%29+with+ESMTP+id+WLtZB4s2TGOGkKOjgFmq9w%5Ctfor+%3Cgithub%40mailgun.bjacobel.com%3E%3B+Thu%2C+11+Aug+2016+21%3A04%3A38.885+%2B0000+%28UTC%29%22%5D%2C+%5B%22Date%22%2C+%22Thu%2C+11+Aug+2016+14%3A04%3A38+-0700%22%5D%2C+%5B%22From%22%2C+%22Brian+Jacobel+%3Cnotifications%40github.com%3E%22%5D%2C+%5B%22Reply-To%22%2C+%22bjacobel%2Fsquirrelbot+%3Creply%2B00063857f9ae860ac96a3959d3e1cdc7b8ed04ff305b3e1792cf0000000113c4aa6692a170ce0470d2a5%40reply.github.com%3E%22%5D%2C+%5B%22To%22%2C+%22bjacobel%2Fsquirrelbot+%3Csquirrelbot%40noreply.github.com%3E%22%5D%2C+%5B%22Cc%22%2C+%22Brian+Jacobel+%3Cgithub%40mailgun.bjacobel.com%3E%2C++Your+activity+%3Cyour_activity%40noreply.github.com%3E%22%5D%2C+%5B%22Message-Id%22%2C+%22%3Cbjacobel%2Fsquirrelbot%2Fpull%2F3%2Fr74502821%40github.com%3E%22%5D%2C+%5B%22In-Reply-To%22%2C+%22%3Cbjacobel%2Fsquirrelbot%2Fpull%2F3%40github.com%3E%22%5D%2C+%5B%22References%22%2C+%22%3Cbjacobel%2Fsquirrelbot%2Fpull%2F3%40github.com%3E%22%5D%2C+%5B%22Subject%22%2C+%22Re%3A+%5Bbjacobel%2Fsquirrelbot%5D+Test+2+%28%233%29%22%5D%2C+%5B%22Mime-Version%22%2C+%221.0%22%5D%2C+%5B%22Content-Type%22%2C+%22multipart%2Falternative%3B+boundary%3D%5C%22--%3D%3D_mimepart_57ace866ba22c_4ef03faf391f129c5462e0%5C%22%3B+charset%3D%5C%22UTF-8%5C%22%22%5D%2C+%5B%22Content-Transfer-Encoding%22%2C+%227bit%22%5D%2C+%5B%22Precedence%22%2C+%22list%22%5D%2C+%5B%22X-Github-Sender%22%2C+%22bjacobel%22%5D%2C+%5B%22X-Github-Recipient%22%2C+%22bjacobel%22%5D%2C+%5B%22X-Github-Reason%22%2C+%22your_activity%22%5D%2C+%5B%22List-Id%22%2C+%22bjacobel%2Fsquirrelbot+%3Csquirrelbot.bjacobel.github.com%3E%22%5D%2C+%5B%22List-Archive%22%2C+%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%22%5D%2C+%5B%22List-Post%22%2C+%22%3Cmailto%3Areply%2B00063857f9ae860ac96a3959d3e1cdc7b8ed04ff305b3e1792cf0000000113c4aa6692a170ce0470d2a5%40reply.github.com%3E%22%5D%2C+%5B%22List-Unsubscribe%22%2C+%22%3Cmailto%3Aunsub%2B00063857f9ae860ac96a3959d3e1cdc7b8ed04ff305b3e1792cf0000000113c4aa6692a170ce0470d2a5%40reply.github.com%3E%2C+%3Chttps%3A%2F%2Fgithub.com%2Fnotifications%2Funsubscribe%2FAAY4V17-Ud0ZJN6TX4_qtFkJ3K1Pl2CIks5qe45mgaJpZM4JZ8Mj%3E%22%5D%2C+%5B%22X-Auto-Response-Suppress%22%2C+%22All%22%5D%2C+%5B%22X-Github-Recipient-Address%22%2C+%22github%40mailgun.bjacobel.com%22%5D%2C+%5B%22X-Sg-Eid%22%2C+%22JO%2FNHJnr0JhM52d3aYKKc3%2FH2mMYT1KLf41bmjjwO0b919K3V%2BgXst7TJT7X7MGRRAnzBRvGg0py7e+%2BqMvbu7ZNSExr85EJFslUOdhbmDBIdmW74mdXh%2FlMawoGieEWC3JD6gsXfrBbN6wz42bKZM02BT1uy+2TTwv0rDybw5acr%2FeV5G2wnLgtwD1W3esHJNMTOpbeBHIwr3xOMWgbxDRHuFjH%2BjjSpp3HS%2F94zH4f+U%3D%22%5D%5D&timestamp=1470949499&token=368f436f37b2fb8e26fe3418cd7b8d929bc04edf17e1482686&signature=ca56cef719f2892de7f1293e9c87e737e43e8283fa869d0f82d7200b80e9460c&body-plain=%3E+%40%40+-0%2C0+%2B1%2C5+%40%40%0D%0A%3E+%2B%23+changes%0D%0A%0D%0Asdfsdf%0D%0A%0D%0A--+%0D%0AYou+are+receiving+this+because+you+are+subscribed+to+this+thread.%0D%0AReply+to+this+email+directly+or+view+it+on+GitHub%3A%0D%0Ahttps%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821&body-html=%3Cp%3EIn+%3Ca+href%3D%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%23discussion_r74502821%22%3Ereadme.md%3C%2Fa%3E%3A%3C%2Fp%3E%0D%0A%3Cpre+style%3D%27color%3A%23555%27%3E%26gt%3B+%40%40+-0%2C0+%2B1%2C5+%40%40%0D%0A%26gt%3B+%2B%23+changes%0D%0A%3C%2Fpre%3E%0D%0A%3Cp%3Esdfsdf%3C%2Fp%3E%0D%0A%0D%0A%3Cp+style%3D%22font-size%3Asmall%3B-webkit-text-size-adjust%3Anone%3Bcolor%3A%23666%3B%22%3E%26mdash%3B%3Cbr+%2F%3EYou+are+receiving+this+because+you+are+subscribed+to+this+thread.%3Cbr+%2F%3EReply+to+this+email+directly%2C+%3Ca+href%3D%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821%22%3Eview+it+on+GitHub%3C%2Fa%3E%2C+or+%3Ca+href%3D%22https%3A%2F%2Fgithub.com%2Fnotifications%2Funsubscribe-auth%2FAAY4V5DItiWAUjUrkEnCId2ElIf4ZWjkks5qe45mgaJpZM4JZ8Mj%22%3Emute+the+thread%3C%2Fa%3E.%3Cimg+alt%3D%22%22+height%3D%221%22+src%3D%22https%3A%2F%2Fgithub.com%2Fnotifications%2Fbeacon%2FAAY4V95vd4GLPLVUndCqEv6X32aMmiO1ks5qe45mgaJpZM4JZ8Mj.gif%22+width%3D%221%22+%2F%3E%3C%2Fp%3E%0D%0A%3Cdiv+itemscope+itemtype%3D%22http%3A%2F%2Fschema.org%2FEmailMessage%22%3E%0D%0A%3Cdiv+itemprop%3D%22action%22+itemscope+itemtype%3D%22http%3A%2F%2Fschema.org%2FViewAction%22%3E%0D%0A++%3Clink+itemprop%3D%22url%22+href%3D%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821%22%3E%3C%2Flink%3E%0D%0A++%3Cmeta+itemprop%3D%22name%22+content%3D%22View+Pull+Request%22%3E%3C%2Fmeta%3E%0D%0A%3C%2Fdiv%3E%0D%0A%3Cmeta+itemprop%3D%22description%22+content%3D%22View+this+Pull+Request+on+GitHub%22%3E%3C%2Fmeta%3E%0D%0A%3C%2Fdiv%3E%0D%0A%0D%0A%3Cscript+type%3D%22application%2Fjson%22+data-scope%3D%22inboxmarkup%22%3E%7B%22api_version%22%3A%221.0%22%2C%22publisher%22%3A%7B%22api_key%22%3A%2205dde50f1d1a384dd78767c55493e4bb%22%2C%22name%22%3A%22GitHub%22%7D%2C%22entity%22%3A%7B%22external_key%22%3A%22github%2Fbjacobel%2Fsquirrelbot%22%2C%22title%22%3A%22bjacobel%2Fsquirrelbot%22%2C%22subtitle%22%3A%22GitHub+repository%22%2C%22main_image_url%22%3A%22https%3A%2F%2Fcloud.githubusercontent.com%2Fassets%2F143418%2F17495839%2Fa5054eac-5d88-11e6-95fc-7290892c7bb5.png%22%2C%22avatar_image_url%22%3A%22https%3A%2F%2Fcloud.githubusercontent.com%2Fassets%2F143418%2F15842166%2F7c72db34-2c0b-11e6-9aed-b52498112777.png%22%2C%22action%22%3A%7B%22name%22%3A%22Open+in+GitHub%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%22%7D%7D%2C%22updates%22%3A%7B%22snippets%22%3A%5B%7B%22icon%22%3A%22PERSON%22%2C%22message%22%3A%22%40bjacobel+in+%233%3A+sdfsdf%22%7D%5D%2C%22action%22%3A%7B%22name%22%3A%22View+Pull+Request%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821%22%7D%7D%7D%3C%2Fscript%3E&stripped-html=%3Cp%3EIn+%3Ca+href%3D%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%23discussion_r74502821%22%3Ereadme.md%3C%2Fa%3E%3A%3C%2Fp%3E%3Cpre+style%3D%27color%3A%23555%27%3E%26gt%3B+%40%40+-0%2C0+%2B1%2C5+%40%40%26gt%3B+%2B%23+changes%3C%2Fpre%3E%3Cp%3Esdfsdf%3C%2Fp%3E%3Cp+style%3D%22font-size%3Asmall%3B-webkit-text-size-adjust%3Anone%3Bcolor%3A%23666%3B%22%3E%26mdash%3B%3Cbr+%2F%3EYou+are+receiving+this+because+you+are+subscribed+to+this+thread.%3Cbr+%2F%3EReply+to+this+email+directly%2C+%3Ca+href%3D%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821%22%3Eview+it+on+GitHub%3C%2Fa%3E%2C+or+%3Ca+href%3D%22https%3A%2F%2Fgithub.com%2Fnotifications%2Funsubscribe-auth%2FAAY4V5DItiWAUjUrkEnCId2ElIf4ZWjkks5qe45mgaJpZM4JZ8Mj%22%3Emute+the+thread%3C%2Fa%3E.%3Cimg+alt%3D%22%22+height%3D%221%22+src%3D%22https%3A%2F%2Fgithub.com%2Fnotifications%2Fbeacon%2FAAY4V95vd4GLPLVUndCqEv6X32aMmiO1ks5qe45mgaJpZM4JZ8Mj.gif%22+width%3D%221%22+%2F%3E%3C%2Fp%3E%3Cdiv+itemscope+itemtype%3D%22http%3A%2F%2Fschema.org%2FEmailMessage%22%3E%3Cdiv+itemprop%3D%22action%22+itemscope+itemtype%3D%22http%3A%2F%2Fschema.org%2FViewAction%22%3E++%3Clink+itemprop%3D%22url%22+href%3D%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821%22%3E%3C%2Flink%3E++%3Cmeta+itemprop%3D%22name%22+content%3D%22View+Pull+Request%22%3E%3C%2Fmeta%3E%3C%2Fdiv%3E%3Cmeta+itemprop%3D%22description%22+content%3D%22View+this+Pull+Request+on+GitHub%22%3E%3C%2Fmeta%3E%3C%2Fdiv%3E%3Cscript+type%3D%22application%2Fjson%22+data-scope%3D%22inboxmarkup%22%3E%7B%22api_version%22%3A%221.0%22%2C%22publisher%22%3A%7B%22api_key%22%3A%2205dde50f1d1a384dd78767c55493e4bb%22%2C%22name%22%3A%22GitHub%22%7D%2C%22entity%22%3A%7B%22external_key%22%3A%22github%2Fbjacobel%2Fsquirrelbot%22%2C%22title%22%3A%22bjacobel%2Fsquirrelbot%22%2C%22subtitle%22%3A%22GitHub+repository%22%2C%22main_image_url%22%3A%22https%3A%2F%2Fcloud.githubusercontent.com%2Fassets%2F143418%2F17495839%2Fa5054eac-5d88-11e6-95fc-7290892c7bb5.png%22%2C%22avatar_image_url%22%3A%22https%3A%2F%2Fcloud.githubusercontent.com%2Fassets%2F143418%2F15842166%2F7c72db34-2c0b-11e6-9aed-b52498112777.png%22%2C%22action%22%3A%7B%22name%22%3A%22Open+in+GitHub%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%22%7D%7D%2C%22updates%22%3A%7B%22snippets%22%3A%5B%7B%22icon%22%3A%22PERSON%22%2C%22message%22%3A%22%40bjacobel+in+%233%3A+sdfsdf%22%7D%5D%2C%22action%22%3A%7B%22name%22%3A%22View+Pull+Request%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821%22%7D%7D%7D%3C%2Fscript%3E&stripped-text=%3E+%40%40+-0%2C0+%2B1%2C5+%40%40%0D%0A%3E+%2B%23+changes%0D%0A%0D%0Asdfsdf%0D%0A%0D%0A--+%0D%0AYou+are+receiving+this+because+you+are+subscribed+to+this+thread.%0D%0AReply+to+this+email+directly+or+view+it+on+GitHub%3A%0D%0Ahttps%3A%2F%2Fgithub.com%2Fbjacobel%2Fsquirrelbot%2Fpull%2F3%2Ffiles%2F5b947c48ef92651051948fbd1c4268d62056d69b%23r74502821&stripped-signature=";
const name = "short comment";
const userFullName = "Brian Jacobel";
const avatar = "https://bjacobel.jpg";
const subject = "Re: [bjacobel/squirrelbot] Test 2 (#3)";
const replyLink =
  "https://github.com/bjacobel/squirrelbot/pull/3/files/5b947c48ef92651051948fbd1c4268d62056d69b#r74502821";
const message =
  "```\r\n" +
  "@@ -0,0 +1,5 @@\r\n" +
  "> +# changes\r\n" +
  "```\r\n" +
  "\r\n" +
  "sdfsdf\r\n" +
  "\r\n";

module.exports = {
  raw,
  name,
  userFullName,
  avatar,
  subject,
  replyLink,
  message,
};
