---
title: Cài HTTPS cho Elastic Beanstalk
description: Cài HTTPS cho single-instance EB dùng `Let's Encrypt`, tốn 20p, miễn phí và rất đơn giản.
---

## Elastic Beanstalk (EB) là gì

Về cơ bản EB dùng gần giống Heroku dynos, tức là bạn chỉ ra app của bạn trên platform nào (_Java_/_Node.js_...). Sau đó chỉ cần đẩy code lên, config một chút là chạy được.<br />
https://aws.amazon.com/elasticbeanstalk

EB khá ok nếu bạn muốn bắt đầu một project mới dùng dịch vụ của AWS và nhưng chưa muốn mất quá nhiều thời gian cho việc setup infra.

## HTTPS

HTTPS giúp việc truyền thông tin giữa client-server, server-server trong hệ thống của bạn được đảm bảo an toàn, khi có người ở giữa đường truyền bắt được gói tin thì cũng không biết được hệ thống của bạn đang gửi cái gì.
Cài HTTPS hầu như là điều bắt buộc để một hệ thộng vận hành trên production.

## Cài HTTPS cho EB

Có hai cách phổ biến:

- Dùng [AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) + **Load Balancer**. Cách này sẽ tốn cost để chạy Load Balancer một chút.
- Nếu bạn chạy **EB Single Instance**, tức là bạn chỉ dùng một instance EC2, không có load balancer thì có thể chọn option free là tự cài HTTPS cert.

> Tham khảo thêm: https://stackoverflow.com/a/63837949

Bài này sẽ hướng dẫn bạn setup trong trường hợp thứ hai, dùng cert free của Let's Encrypt.<br/>
**Let's go!**

### Trước hết

Đảm bảo rằng bạn đã deploy app của bạn lên EB, và bạn có thể kết nối với app qua HTTP.

### Cài script tự động setup HTTPS

Vào trang này để lấy script: https://github.com/HausCloud/AWS-EB-SSL<br/>
Hầu như `REAME` của trang trên đã hướng dẫn rất đầy đủ, nên mình sẽ không nói gì thêm.

Chú ý: nếu bạn đang dùng **Code Pipeline** của AWS để tự động deploy app mỗi khi push code lên GitHub, hoặc bạn deploy bằng tay, thì không cần làm bước `1` và `5` (dùng EB CLI để deploy).

Cuối cùng bạn thử kết nối lại với app của mình để kiểm tra xem HTTPS đã được kích hoạt chưa.

### Xử lý lỗi

#### Lỗi liên quan đến permission

Trong README có hướng dẫn.

#### Deploy gặp `instance of Fn::GetAtt references undefined resource AWSEBLoadBalancer`

- Xóa file `.ebextensions/single_instance.config`.<br/>
- Tham khảo hướng dẫn của AWS [ở đây](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html#using-features.managing.changetype) và đổi **Environment Type** về single instance sau đó deploy lại.

## Kết

Với cách trên, nếu không gặp vấn đề gì đặc biệt thì bạn chỉ mất đâu tầm `20p` để setup HTTPS cho single-instance EB. Rất cool phải không nào.

(Môi trường trên AWS thay đổi liên tục nên không đảm bảo rằng cách này sẽ hoạt động mãi mãi. Ít nhất nó hoạt động ở thời điểm viết bài viết này, `06/03/2020`. Glhf.)
